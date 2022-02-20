/* eslint-disable no-undef */
import * as defaultConfig from './default.json'
import * as production from './production.json'
import * as development from './development.json'
import * as local from './local.json'

let configObject = {
  ...defaultConfig.default,
}

const NODE_ENV = process.env.NODE_ENV
if (NODE_ENV === 'production') {
  configObject = {
    ...configObject,
    ...production.default,
  }
} else {
  configObject = {
    ...configObject,
    ...development.default,
  }
}

configObject = {
  ...configObject,
  ...local.default,
}

const getChild = (object, path) => {
  const paths = path.split('.')
  let current = object

  for (let i = 0; i < paths.length; i++) {
    if (current[paths[i]] === undefined) {
      return undefined
    } else {
      current = current[paths[i]]
    }
  }

  return current
}

const config = {
  has: (path) => (getChild(configObject, path) ? true : false),
  get: (path) => getChild(configObject, path),
}

// console.log('config:', configObject);
export default config
