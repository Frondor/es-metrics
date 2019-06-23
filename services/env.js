/**
 * Environment variables manager
 */
class ENV {
  /**
   * Get the value of an environment variable, or return a default value
   * @param {String} variable
   * @param {*} defaultTo default value if env variable is blank
   * @return {String}
   */
  get(variable, defaultTo) {
    return process.env[variable] || defaultTo;
  }
}

module.exports = new ENV();
