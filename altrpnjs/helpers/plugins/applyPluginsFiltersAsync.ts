import Plugin from 'App/Plugin';
import fs from 'fs';
import app_path from '../path/app_path';
import isProd from '../isProd';
import Logger from '@ioc:Adonis/Core/Logger';
import _ from 'lodash'

export default async function applyPluginsFiltersAsync(type: string, content,) {

  const base = `AltrpPlugins`

  let hooks:any= []

  const plugins = Plugin.getEnabledPlugins()
  for (const plugin of plugins) {
    const hasType = fs.existsSync(app_path(`${base}/${plugin.name}/hooks/async/${type}`));
    if (hasType) {
      const hookNames = fs.readdirSync(app_path(`${base}/${plugin.name}/hooks/async/${type}`))
      for (const hookName of hookNames) {
        const filePath = app_path(`${base}/${plugin.name}/hooks/async/${type}/${hookName}`)
        try {
          const hook = isProd() ? (require(filePath)).default
            : (await import(filePath)).default
          hooks.push({
            fn:hook,
            hookName
          })
        } catch (e) {
          Logger.error(e)
        }
      }
    }
  }

  hooks = _.sortBy(hooks,[
    hook=>{
    return parseInt(hook.hookName)
  },
      hook=>{
    return hook.hookName
  },])
  for(const hook of hooks){
    content = await hook.fn(content)
  }
  return content
}
