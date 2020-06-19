<?php

namespace App\Altrp\Generators;

use App\Altrp\Controller;
use Artisan;

class ControllerGenerator extends AppGenerator
{
    /**
     * @var Controller
     */
    private $controllerModel;

    /**
     * Пространство имен контроллера
     *
     * @var string
     */
    private $namespace = '';

    /**
     * Префикс для группы маршрутов
     *
     * @var string|null
     */
    private $prefix = null;

    /**
     * Данные, необходимые для генерации контроллера
     *
     * @var object
     */
    private $data;

    /**
     * Валидационные правила
     *
     * @var $array
     */
    private $validationRules;

    public function __construct(Controller $controller, $data, array $routes = [])
    {
        $this->controllerModel = $controller;

        if (is_array($data)) {
            $obj = new \stdClass;
            $this->data = $this->convertToObject($data, $obj);
        } else {
            $this->data = json_decode($data);
        }

        if ($routes) {
            $routeGenerator = new RouteGenerator();
            foreach ($routes as $name => $controller) {
                $routeGenerator->addDynamicVariable($name, $controller);
            }
            $routeGenerator->generate();
        }
    }

    /**
     * Сгенерировать новый контроллер
     *
     * @return boolean
     */
    public function generate()
    {
        // Записать контроллер в таблицу
        if(! $this->writeController()) return false;

        // Сгенерировать новый контроллер
        if (! $this->runCreateCommand()) return false;

        return true;
    }

    /**
     * Добавить контроллер в таблицу контроллеров
     *
     * @return boolean
     */
    private function writeController()
    {
        $this->controllerModel->model_id = $this->data->controller->model_id;
        $this->controllerModel->description = $this->data->controller->description ?? '';
        $this->prefix = $this->data->controller->prefix ?? $this->prefix;
        $this->validationRules = $this->data->controller->validations ?? $this->validationRules;
        $this->path = $this->data->controller->path ? $this->data->controller->path . '/' : 'Http/Controllers/';

        if (isset($this->data->controller->namespace)) {
            $this->namespace = $this->screenBacklashes($this->data->controller->namespace);
        }

        $this->controllerFilename = 'app/' . $this->path . $this->controllerModel->model()->first()->name . 'Controller.php';

        if (file_exists(base_path($this->controllerFilename))) {
            return false;
        }

        return $this->controllerModel->save();
    }


    /**
     * Запустить artisan команду для генерации контроллера
     *
     * @return boolean
     */
    public function runCreateCommand()
    {
        $modelName = $this->controllerModel->model()->first()->name;

        $validations = $this->validationsToString();

        $crudName = $this->toSnakeCase($modelName);

        Artisan::call("crud:controller {$modelName}Controller
            --crud-name={$crudName}
            --model-name={$modelName}
            --controller-namespace={$this->namespace}
            --route-group={$this->prefix}
            --validations={$validations}
        ");

        // NOT FOR crud:api-controller !!!

        // --route-group={$this->prefix}

        return true;
    }


    /**
     * Сформировать строку с валидационными правилами для artisan команды
     *
     * @return string
     */
    private function validationsToString()
    {
        if ((array) $this->validationRules) {
            $validationArr = [];

            foreach ($this->validationRules as $name => $rules) {
                $rules = (array) $rules;
                if (! empty($rules)) {
                    $validationArr[] = $name . '#' . implode('|', $rules);
                }
            }

            return implode(';', $validationArr);
        }
        return '';
    }
}
