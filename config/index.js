const path = require('path');
const fs = require('fs');
const { get, set, defaultTo } = require('lodash');

const fileRegExp = new RegExp('(.js|.json)$');
const isFile = (fileName) => fileRegExp.test(fileName);

const setIn = (rootDir, filePath, store) => {
  const value = require(filePath);
  const keyPath = filePath
    .replace(rootDir, '') // remove base path
    .replace(fileRegExp, '') // remove file extensions
    .split(path.sep) // split by the OS separator
    .filter((v) => v); // clear empty strings

  return set(store, keyPath, value);
};

/**
 * Recursively load modules into a hash of namespaces, by file paths
 * @param {String} currentDir base path where
 * @param {String} rootDir
 * @param {Object} contents
 * @return {*}
 */
const readdirContents = (currentDir, rootDir = currentDir, contents = {}) =>
  fs.readdirSync(currentDir).reduce((tree, node) => {
    // If current file is this same file, continue
    if (path.join(__dirname, node) === __filename) return tree;
    const currentPath = path.join(currentDir, node);
    if (isFile(node)) return setIn(rootDir, currentPath, tree);
    return readdirContents(currentPath, rootDir, contents);
  }, contents);

const initialStore = readdirContents(__dirname);

/**
 * Config manager
 */
class Config {
  /**
   * @param {*} store initial state of the store
   */
  constructor(store = {}) {
    this.store = store;
  }

  /**
   * Get a value in specified path of the config store
   * @param {String|String[]} pathLike
   * @param {*} defaultValue
   * @return {*}
   */
  get(pathLike, defaultValue) {
    return defaultTo(get(this.store, pathLike), defaultValue);
  }

  /**
   * Set a value in the store to the specified path
   * @param {String|String[]} pathLike
   * @param {*} value
   * @return {*}
   */
  set(pathLike, value) {
    return set(this.store, pathLike, value);
  }
}

module.exports = new Config(initialStore);
