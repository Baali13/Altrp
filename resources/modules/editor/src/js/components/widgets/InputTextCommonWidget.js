const {
  isEditor,
  replaceContentWithData,
  renderAsset,
  getDataFromLocalStorage,
} = window.altrpHelpers;
import {changeFormFieldValue} from "../../../../../front-app/src/js/store/forms-data-storage/actions";
import AltrpInput from "../altrp-input/AltrpInput";

const Button = window.altrpLibs.Blueprint.Button;
const Intent = window.altrpLibs.Blueprint.Intent;
const Tooltip2 = window.altrpLibs.Tooltip2;

(window.globalDefaults = window.globalDefaults || []).push(`
.altrp-field-label_text-widget{
    width: 100%;
}
.bp3-icon_text-widget img{
  width: 16px;
  height: 16px;
  object-fit: contain;
  pointer-events: none;
}
.bp3-icon_text-widget svg{
  width: 16px;
  height: 16px;
  pointer-events: none;
}
.bp3-icon_right{
    margin: 7px;
}
.altrp-field {
  border-style: solid;
  width: 100%;
}
.altrp-field-file{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.altrp-label-icon,
.altrp-label-icon svg,
.altrp-label-icon img {
  width: 20px;
}
.altrp-label-icon svg{
  height: 20px;
}
.altrp-field-file__field{
  display: none;
}
.altrp-field-file__placeholder{
  display: none;
}
.altrp-field-file_empty .altrp-field-file__placeholder{
  display: block;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  background-color: rgb(52,59,76);
  color: #fff;
}
.input-clear-btn {
  background: transparent;
  padding: 0;
  position: absolute;
  bottom: calc(50% - 7px);
  right: 15px;
  display: none;
}
.input-clear-btn:hover {
  font-weight: bold;
}
.altrp-field:hover + .input-clear-btn, .input-clear-btn:hover {
  display: block;
}
.altrp-input-wrapper, .altrp-field-select2 {
  position: relative;
  flex-grow: 1;
}
.altrp-field-label--required::after {
  content: "*";
  color: red;
  font-size: inherit;
  padding-left: 10px;
}
.altrp-field-label {
  font-size: 16px;
  font-family: "Open Sans";
  line-height: 1.5;
  letter-spacing: 0;
}
.altrp-field-select2__single-value, .altrp-field {
  font-size: 16px;
  font-family: "Open Sans";
  line-height: 1.5;
  letter-spacing: 0;
}
.altrp-field-select2__control, .altrp-field {
  text-align: left;
  padding-top: 2px;
  padding-right: 2px;
  padding-bottom: 2px;
  padding-left: 2px;
  border-width: 1px;
  border-color: #000;
}
.altrp-field-select2__control:hover{
  border-width: 1px;
  border-color: #000;
}
.altrp-field-container {
  margin: 0;
}
.altrp-field::placeholder, .altrp-field-select2__placeholder {
  font-size: 13px;
  font-family: "Open Sans";
  line-height: 1.5;
  letter-spacing: 0;
}
.altrp-image-select {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.altrp-image-select img {
  flex-grow: 1;
  object-fit: contain;
}
.altrp-field {
  overflow: hidden;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.altrp-field.active {
  border-color: lightcoral;
}
.altrp-field-label {
  text-align: center;
  display: block;
}
.altrp-pagination__select-size .altrp-field-select2__single-value {
  font-size: 14px;
}
.altrp-pagination__select-size .altrp-field-select2__indicator-separator {
  display: none;
}
.altrp-pagination__select-size .altrp-field-select2__indicator {
  align-items: center;
}
.altrp-pagination__select-size .altrp-field-select2__control {
  width: 100px;
  min-height: 32px;
  padding: 0;
  border-radius: 0;
  outline: none;
  border-color: rgb(142,148,170);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.altrp-pagination__select-size .altrp-field-select2__control input {
  border: none;
}
.altrp-field-select2 {
  position: relative;
  box-sizing: border-box;
  pointer-events: none;
}
.altrp-field-select2__control {
  webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  background-color: hsl(0,0%,100%);
  border-color: hsl(0,0%,80%);
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  min-height: 38px;
  outline: 0 !important;
  position: relative;
  -webkit-transition: all 100ms;
  transition: all 100ms;
  box-sizing: border-box;
}
.altrp-field-select2__value-container {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 2px 8px;
  -webkit-overflow-scrolling: touch;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
}
.altrp-field-select2__single-value {
  color: hsl(0,0%,20%);
  margin-left: 2px;
  margin-right: 2px;
  max-width: calc(100% - 8px);
  overflow: hidden;
  position: absolute;
  text-overflow: ellipsis;
  white-space: nowrap;
  top: 50%;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  box-sizing: border-box;
}
.altrp-field-select2__indicators {
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-shrink: 0;
  -ms-flex-negative: 0;
  flex-shrink: 0;
  box-sizing: border-box;
}
.altrp-field-select2__indicator-separator {
  -webkit-align-self: stretch;
  -ms-flex-item-align: stretch;
  align-self: stretch;
  background-color: hsl(0,0%,80%);
  margin-bottom: 8px;
  margin-top: 8px;
  width: 1px;
  box-sizing: border-box;
}
.altrp-field-select2__indicator {
  color: hsl(0,0%,80%);
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  padding: 8px;
  -webkit-transition: color 150ms;
  transition: color 150ms;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
}
.tba-placeholder {
  display: flex;
  justify-content: center;
  font-size: 28px;
  font-weight: bold;
}
.altrp-field-subgroup {
  display: flex;
  flex-wrap: wrap;
}
.altrp-field-option {
  display: flex;
  padding: 10px;
}
.altrp-field-option__label {
  cursor: pointer;
}
textarea.altrp-field {
  display: block;
}
.altrp-table__filter-select .altrp-field-select2__placeholder {
  white-space: nowrap;
}
.altrp-table__filter-select .altrp-field-select2__single-value {
  font-size: 14px;
}
.altrp-table__filter-select .altrp-field-select2__indicator-separator {
  display: none;
}
.altrp-table__filter-select .altrp-field-select2__indicator {
  align-items: center;
}
.altrp-table__filter-select .altrp-field-select2__control {
  width: 100%;
  min-height: 19px;
  padding: 0;
  border-radius: 0;
  outline: none;
  border-color: rgb(142, 148, 170);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}
.altrp-table__filter-select .altrp-field-select2__control input {
  border: none;
}
.altrp-table__filter-select .altrp-field-select2__value-container {
  padding-top: 0;
  padding-bottom: 0;
  line-height: 13px;
}
.altrp-field-required {
  color: red;
  font-size: 18px;
  padding-left: 10px;
}
.altrp-field-container-label {
  display: flex;
  flex-direction: row;
}

.altrp-field-label-container-left {
  display: flex;
  align-items: center;
}

.altrp-field-label-container {
  display: inline-flex;
  align-items: center;
}
.altrp-field-select2__indicator.altrp-field-select2__dropdown-indicator {
  padding: 0 8px;
  max-height: 14px;
  overflow: hidden;
}
.altrp-field-select2 .altrp-field-select2__value-container {
  padding: 0px 8px;
}
.altrp-field-select2 .css-b8ldur-Input {
  padding-bottom: 0px;
  padding-top: 0px;
  margin: 0 2px;
}
.altrp-field-select2 .altrp-field-select2__control {
  min-height: 14px;
}
`)

const AltrpFieldContainer = styled.div`
  ${({settings: {content_label_position_type}}) => {
  switch (content_label_position_type) {
    case "left": {
      return "display: flex";
    }
    case "right": {
      return "display:flex;flex-direction:row-reverse;justify-content:flex-end;";
    }
  }
  return "";
}}
`;

class InputTextCommonWidget extends Component {
  timeInput = null;

  constructor(props) {
    super(props);
    props.element.component = this;
    if (window.elementDecorator) {
      window.elementDecorator(this);
    }
    this.onChange = this.onChange.bind(this);
    this.debounceDispatch = this.debounceDispatch.bind(this);

    this.defaultValue = this.getContent("content_default_value")

    this.state = {
      settings: {...props.element.getSettings()},
      showPassword: false,
    };
    this.popoverProps = {
      usePortal: true,
      // isOpen:true ,
      portalClassName: `altrp-portal altrp-portal${this.props.element.getId()}`,
      portalContainer: window.EditorFrame ? window.EditorFrame.contentWindow.document.body : document.body,
    };
    this.altrpSelectRef = React.createRef();
    if (this.getContent("content_default_value")) {
      this.dispatchFieldValueToStore(this.getContent("content_default_value"));
    }
  }

  /**
   * Чистит значение
   */
  clearValue() {
    let value = "";
    this.onChange(value);
    this.dispatchFieldValueToStore(value, true);
  }

  /**
   * Обработка нажатия клавиши
   * @param {{}} e
   */
  handleEnter = e => {
    if (e.keyCode === 13) {
      e.preventDefault();
      const inputs = Array.from(document.querySelectorAll("input,select"));
      const index = inputs.indexOf(e.target);
      if (index === undefined) return;
      inputs[index + 1] && inputs[index + 1].focus();
      const {
        create_allowed,
        create_label,
        create_url
      } = this.props.element.getSettings();
      if (create_allowed && create_label && create_url) {
        this.createItem(e);
      }
    }
  };

  /**
   * Загрузка виджета
   * @param {{}} prevProps
   * @param {{}} prevState
   */
  async _componentDidMount(prevProps, prevState) {

    let value = this.getValue();

    /**
     * Если модель обновилась при смене URL
     */
    if (
      prevProps &&
      !prevProps.currentModel.getProperty("altrpModelUpdated") &&
      this.props.currentModel.getProperty("altrpModelUpdated")
    ) {
      value = this.getContent("content_default_value");
      this.setState(
        state => ({...state, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
      return;
    }
    if (
      this.props.currentModel.getProperty("altrpModelUpdated") &&
      this.props.currentDataStorage.getProperty("currentDataStorageLoaded") &&
      !this.state.contentLoaded
    ) {
      value = this.getContent("content_default_value");
      this.setState(
        state => ({...state, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
      return;
    }
  }

  /**
   *
   * @returns {Date}
   */
  getValue = () => {
    let value;
    let formId = this.props.element.getFormId();
    let fieldName = this.props.element.getFieldId();
    if (isEditor()) {
      value = this.state.value;
    } else {
      value = _.get(appStore.getState(), `formsStore.${formId}.${fieldName}`, '')
    }
    return value;
  }

  /**
   * Обновление виджета
   */
  async _componentDidUpdate(prevProps, prevState) {
    if (
      prevProps &&
      !prevProps.currentDataStorage.getProperty("currentDataStorageLoaded") &&
      this.props.currentDataStorage.getProperty("currentDataStorageLoaded")
    ) {
      let value = this.getContent(
        "content_default_value",
        this.props.element.getSettings("select2_multiple")
      );
      this.setState(
        state => ({...state, contentLoaded: true}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
    }

    /**
     * Если обновилась модель, то пробрасываем в стор новое значение (старый источник диамических данных)
     */
    if (
      !_.isEqual(this.props.currentModel, prevProps.currentModel) &&
      this.state.value &&
      this.state.value.dynamic
    ) {
      this.dispatchFieldValueToStore(this.getContent("content_default_value"));
    }

    this.updateValue(prevProps);
  }

  /**
   * Обновить значение если нужно
   * @param {{}} prevProps
   */
  updateValue(prevProps) {
    if (isEditor()) {
      return;
    }
    let content_calculation = this.props.element.getSettings(
      "content_calculation"
    );
    const altrpforms = this.props.formsStore;
    const fieldName = this.props.element.getFieldId();
    const formId = this.props.element.getFormId();
    if (!content_calculation) {
      /**
       * Обновить значение, если formsStore изменилось из другого компонента
       */
      const path = `${formId}.${fieldName}`;
      if (
        this.props.formsStore !== prevProps.formsStore &&
        _.get(altrpforms, path) !== this.state.value
      ) {
        this.setState(state => ({
          ...state,
          value: _.get(altrpforms, path)
        }));
      }
      return;
    }

    const prevContext = {};

    const altrpdata = this.props.currentDataStorage.getData();
    const altrpmodel = this.props.currentModel.getData();
    const altrpuser = this.props.currentUser.getData();
    const altrppagestate = this.props.altrpPageState.getData();
    const altrpresponses = this.props.altrpresponses.getData();
    const altrpmeta = this.props.altrpMeta.getData();
    const context = this.props.element.getCurrentModel().getData();
    if (content_calculation.indexOf("altrpdata") !== -1) {
      context.altrpdata = altrpdata;
      if (!altrpdata.currentDataStorageLoaded) {
        prevContext.altrpdata = altrpdata;
      } else {
        prevContext.altrpdata = prevProps.currentDataStorage.getData();
      }
    }
    if (content_calculation.indexOf("altrpforms") !== -1) {
      context.altrpforms = altrpforms;
      /**
       * Не производим вычисления, если изменилось текущее поле
       */
      if (`${formId}.${fieldName}` === altrpforms.changedField) {
        prevContext.altrpforms = altrpforms;
      } else {
        prevContext.altrpforms = prevProps.formsStore;
      }
    }
    if (content_calculation.indexOf("altrpmodel") !== -1) {
      context.altrpmodel = altrpmodel;
      prevContext.altrpmodel = prevProps.currentModel.getData();
    }
    if (content_calculation.indexOf("altrpuser") !== -1) {
      context.altrpuser = altrpuser;
      prevContext.altrpuser = prevProps.currentUser.getData();
    }
    if (content_calculation.indexOf("altrpuser") !== -1) {
      context.altrpuser = altrpuser;
      prevContext.altrpuser = prevProps.currentUser.getData();
    }
    if (content_calculation.indexOf("altrppagestate") !== -1) {
      context.altrppagestate = altrppagestate;
      prevContext.altrppagestate = prevProps.altrpPageState.getData();
    }
    if (content_calculation.indexOf("altrpmeta") !== -1) {
      context.altrpmeta = altrpmeta;
      prevContext.altrpmeta = prevProps.altrpMeta.getData();
    }
    if (content_calculation.indexOf("altrpresponses") !== -1) {
      context.altrpresponses = altrpresponses;
      prevContext.altrpresponses = prevProps.altrpresponses.getData();
    }

    if (content_calculation.indexOf("altrpstorage") !== -1) {
      context.altrpstorage = getDataFromLocalStorage("altrpstorage", {});
    }

    if (
      _.isEqual(prevProps.currentDataStorage, this.props.currentDataStorage) &&
      _.isEqual(prevProps.currentUser, this.props.currentUser) &&
      _.isEqual(prevProps.formsStore, this.props.formsStore) &&
      _.isEqual(prevProps.altrpPageState, this.props.altrpPageState) &&
      _.isEqual(prevProps.altrpMeta, this.props.altrpMeta) &&
      _.isEqual(prevProps.altrpresponses, this.props.altrpresponses) &&
      _.isEqual(prevProps.currentModel, this.props.currentModel)
    ) {
      return;
    }
    if (
      !_.isEqual(prevProps.formsStore, this.props.formsStore) &&
      `${formId}.${fieldName}` === altrpforms.changedField
    ) {
      return;
    }
    let value = "";
    try {
      content_calculation = content_calculation
        .replace(/}}/g, "')")
        .replace(/{{/g, "_.get(context, '");
      value = eval(content_calculation);
      if (value === this.state.value) {
        return;
      }
      this.setState(
        state => ({...state, value}),
        () => {
          this.dispatchFieldValueToStore(value);
        }
      );
    } catch (e) {
      console.error(
        "Evaluate error in Input" + e.message,
        this.props.element.getId()
      );
    }
  }


  /**
   * Изменение значения в виджете
   * @param e
   */
  onChange(e) {
    let value = "";
    if (e && e.target) {
      value = e.target.value;
    }

    if (e && e.value) {
      value = e.value;
    }


    /**
     * Обновляем хранилище только если не текстовое поле
     */

    const change_actions = this.props.element.getSettings("change_actions");
    const change_change_end = this.props.element.getSettings(
      "change_change_end"
    );
    const change_change_end_delay = this.props.element.getSettings(
      "change_change_end_delay"
    );

    if (change_actions && !change_change_end && !isEditor()) {
      this.debounceDispatch(
        value !== undefined ? value : value
      );
    }
    if (change_actions && change_change_end && !isEditor()) {
      this.timeInput && clearTimeout(this.timeInput);
      this.timeInput = setTimeout(() => {
        this.debounceDispatch(
          value !== undefined ? value : value
        );
      }, change_change_end_delay);
    }
    if(isEditor()){
      this.setState(state=>({...state, value}))
    } else {
      this.dispatchFieldValueToStore(value, true)
    }
  }

  debounceDispatch = _.debounce(
    value => this.dispatchFieldValueToStore(value, true),
    150
  );


  /**
   * Для действие по фокусу
   * @param e
   * @return {Promise<void>}
   */

  onFocus = async e => {
    const focus_actions = this.props.element.getSettings("focus_actions");

    if (focus_actions && !isEditor()) {
      const actionsManager = (
        await import(
          /* webpackChunkName: 'ActionsManager' */
          "../../../../../front-app/src/js/classes/modules/ActionsManager.js"
          )
      ).default;
      await actionsManager.callAllWidgetActions(
        this.props.element.getIdForAction(),
        "focus",
        focus_actions,
        this.props.element
      );
    }
  };
  /**
   * Потеря фокуса для оптимизации
   * @param  e
   * @param  editor для получения изменений из CKEditor
   */
  onBlur = async (e, editor = null) => {
    this.dispatchFieldValueToStore(e.target.value, true);

    if (_.get(editor, "getData")) {
      this.dispatchFieldValueToStore(editor.getData(), true);
    }
    if (this.props.element.getSettings("actions", []) && !isEditor()) {
      const actionsManager = (
        await import(
          /* webpackChunkName: 'ActionsManager' */
          "../../../../../front-app/src/js/classes/modules/ActionsManager.js"
          )
      ).default;
      await actionsManager.callAllWidgetActions(
        this.props.element.getIdForAction(),
        "blur",
        this.props.element.getSettings("actions", []),
        this.props.element
      );
    }
  };
  /**
   * Передадим значение в хранилище формы
   * @param {*} value
   * @param {boolean} userInput true - имзенилось пользователем
   */
  dispatchFieldValueToStore = async (value, userInput = false) => {
    let formId = this.props.element.getFormId();
    let fieldName = this.props.element.getFieldId();
    if (fieldName.indexOf("{{") !== -1) {
      fieldName = replaceContentWithData(fieldName);
    }
    if (_.isObject(this.props.appStore) && fieldName && formId) {
      this.props.appStore.dispatch(
        changeFormFieldValue(fieldName, value, formId, userInput)
      );
      if (userInput) {
        const change_actions = this.props.element.getSettings("change_actions");

        if (change_actions && !isEditor()) {
          const actionsManager = (
            await import(
              /* webpackChunkName: 'ActionsManager' */
              "../../../../../front-app/src/js/classes/modules/ActionsManager.js"
              )
          ).default;
          await actionsManager.callAllWidgetActions(
            this.props.element.getIdForAction(),
            "change",
            change_actions,
            this.props.element
          );
        }
      }
    }
  };

  /**
   * Взовращает имя для атрибута name
   * @return {string}
   */
  getName() {
    return `${this.props.element.getFormId()}[${this.props.element.getFieldId()}]`;
  }

  handleLockClick = () => {
    this.setState((state) => {
      return {
        ...state,
        showPassword: !state.showPassword,
      }
    })
  }

  renderLeftIcon(){
    const {element} = this.props;
    let left_icon = element.getResponsiveSetting('left_icon');
    let password_show_left_icon = element.getResponsiveSetting('password_show_left_icon');
    const {content_type} = element.settings
    const leftIconProps = {}
    if(content_type === 'password' && this.state.showPassword && password_show_left_icon){
      left_icon = password_show_left_icon
      leftIconProps.onClick = this.handleLockClick
    }
    if(content_type === 'password' && password_show_left_icon){
      leftIconProps.onClick = this.handleLockClick
      leftIconProps.style = {
        cursor: 'pointer'
      }
    }
    if(!left_icon){
      return null
    }
    return <span className="bp3-icon bp3-icon_text-widget bp3-icon_left" {...leftIconProps} tabindex="0">
      {renderAsset(left_icon, )}
    </span>
  }
  renderRightIcon(){
    const {element} = this.props;
    let right_icon = element.getResponsiveSetting('right_icon');
    let password_show_right_icon = element.getResponsiveSetting('password_show_right_icon');
    const {content_type} = element.settings
    const rightIconProps = {}
    if(content_type === 'password' && this.state.showPassword && password_show_right_icon){
      right_icon = password_show_right_icon
    }
    if(content_type === 'password' && password_show_right_icon){
      rightIconProps.onClick = this.handleLockClick
      rightIconProps.style = {
        cursor: 'pointer'
      }
    }
    if(!right_icon){
      return null
    }
    return <span className="bp3-icon bp3-icon_text-widget bp3-icon_right" {...rightIconProps} tabindex="0">
      {renderAsset(right_icon, )}
    </span>
  }

  render() {
    let label = null;
    const settings = this.props.element.getSettings();
    const {
      content_readonly,
      label_icon
    } = settings;
    let value = this.getValue()

    let classLabel = "";
    let styleLabel = {};
    const content_label_position_type = this.props.element.getResponsiveSetting(
      "content_label_position_type"
    );
    const label_icon_position = this.props.element.getResponsiveSetting('label_icon_position')
    let label_style_spacing = this.props.element.getResponsiveSetting('label_style_spacing')
    switch (content_label_position_type) {
      case "top":
        styleLabel = {
          marginBottom: label_style_spacing
            ? label_style_spacing?.size +
            label_style_spacing?.unit
            : 2 + "px"
        };
        classLabel = "";
        break;
      case "bottom":
        styleLabel = {
          marginTop: label_style_spacing
            ? label_style_spacing?.size +
            label_style_spacing?.unit
            : 2 + "px"
        };
        classLabel = "";
        break;
      case "left":
        styleLabel = {
          marginRight: label_style_spacing
            ? label_style_spacing?.size +
            label_style_spacing?.unit
            : 2 + "px"
        };
        classLabel = "altrp-field-label-container-left";
        break;
      case "absolute":
        styleLabel = {
          position: "absolute",
          zIndex: 2
        };
        classLabel = "";
        break;
    }

    if (this.state.settings.content_label || label_icon ) {
      label = (
        <div
          className={"altrp-field-label-container " + classLabel}
          style={styleLabel}
        >
          <label
            htmlFor={this.getName()}
            style={{
              display: 'flex',
              flexDirection: label_icon_position,
            }}
            className={`altrp-field-label altrp-field-label_text-widget ${this.state.settings.content_required
              ? "altrp-field-label--required"
              : ""
            }`}
          >
            {this.state.settings.content_label}

            {label_icon && label_icon.type && (
              <span className="altrp-label-icon">
              {renderAsset(label_icon)}
            </span>
            )}
          </label>
        </div>
      );
    } else {
      label = null;
    }
    let autocomplete = "off";
    if (this.state.settings.content_autocomplete) {
      autocomplete = "on";
    } else {
      autocomplete = "off";
    }

    let input = (
      <div className="altrp-input-wrapper">
        <AltrpInput
          type={this.state.settings.content_type === 'password' ? (this.state.showPassword ? "text" : "password") : this.state.settings.content_type}
          name={this.getName()}
          id={this.getName()}
          value={value || ""}
          popoverProps={this.popoverProps}
          element={this.props.element}
          readOnly={content_readonly}
          autoComplete={autocomplete}
          placeholder={this.state.settings.content_placeholder}
          settings={this.props.element.getSettings()}
          onKeyDown={this.handleEnter}
          onChange={this.onChange}
          onBlur={this.onBlur}
          onFocus={this.onFocus}
          leftIcon={this.renderLeftIcon()}
          rightElement={this.renderRightIcon()}
        />
      </div>
    );

    return (
      <AltrpFieldContainer
        settings={settings}
        className="altrp-field-container "
      >
        {content_label_position_type === "top" ? label : ""}
        {content_label_position_type === "left" ? label : ""}
        {content_label_position_type === "right" ? label : ""}
        {content_label_position_type === "absolute" ? label : ""}
        {/* .altrp-field-label-container */}
        {input}
        {content_label_position_type === "bottom" ? label : ""}
      </AltrpFieldContainer>
    );
  }
}

export default InputTextCommonWidget;