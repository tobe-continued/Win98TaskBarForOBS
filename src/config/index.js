import * as defaultConfig from './default';

let configObject = {
  ...defaultConfig.default,
}

const getChild = (object, path) => {
  const paths = path.split('.');
  let current = object;

  for (let i = 0; i < paths.length; i++) {
    if (current[paths[i]] === undefined) {
      return undefined;
    } else {
      current = current[paths[i]];
    }
  }

  return current;
}

const config = {
  has: (path) => getChild(configObject, path) ? true : false,
  get: (path) => getChild(configObject, path),
}

// console.log('config:', configObject);
export default config;