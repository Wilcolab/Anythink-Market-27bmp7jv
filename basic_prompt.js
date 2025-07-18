/**
 * Converts a string to camelCase.
 * Example: toCamelCase('my_name') returns 'myName'
 *
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase version of the input string.
 */
function toCamelCase(str) {
    return str
        .replace(/[_-\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '')
        .replace(/^[A-Z]/, c => c.toLowerCase());
}