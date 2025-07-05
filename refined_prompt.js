/**
 * Converts a given string to camelCase format.
 *
 * - Non-alphanumeric characters are treated as word separators.
 * - The first word is lowercased, subsequent words are capitalized.
 * - Handles strings with spaces, underscores, hyphens, and mixed casing.
 * - Returns an empty string for non-string or empty input.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The camelCase formatted string.
 *
 * @example
 * toCamelCase('first name');      // 'firstName'
 * toCamelCase('user_id');         // 'userId'
 * toCamelCase('SCREEN_NAME');     // 'screenName'
 * toCamelCase('mobile-number');   // 'mobileNumber'
 * toCamelCase(undefined);         // ''
 * toCamelCase(null);              // ''
 */

/**
 * Converts a given string to dot.case format.
 *
 * - Converts camelCase to dot.case by inserting dots before uppercase letters.
 * - Replaces all non-alphanumeric characters with dots.
 * - Collapses multiple consecutive dots into a single dot.
 * - Trims leading and trailing dots.
 * - Converts the result to lowercase.
 * - Returns an empty string for non-string or empty input.
 *
 * @param {string} str - The input string to convert.
 * @returns {string} The dot.case formatted string.
 *
 * @example
 * toDotCase('first name');      // 'first.name'
 * toDotCase('user_id');         // 'user.id'
 * toDotCase('SCREEN_NAME');     // 'screen.name'
 * toDotCase('mobile-number');   // 'mobile.number'
 * toDotCase('someCamelCase');   // 'some.camel.case'
 * toDotCase(undefined);         // ''
 * toDotCase(null);              // ''
 */
function toCamelCase(str) {
    if (typeof str !== 'string') return '';
    // Replace non-alphanumeric with space, then split
    const words = str
        .replace(/[^a-zA-Z0-9]+/g, ' ')
        .trim()
        .split(/\s+/);

    if (words.length === 0) return '';

    return words
        .map((word, i) => {
            word = word.toLowerCase();
            if (i === 0) return word;
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Examples:
// toCamelCase('first name')        // 'firstName'
// toCamelCase('user_id')           // 'userId'
// toCamelCase('SCREEN_NAME')       // 'screenName'
// toCamelCase('mobile-number')     // 'mobileNumber'
// toCamelCase(undefined)           // ''
// toCamelCase(null)                // ''

function toDotCase(str) {
    if (typeof str !== 'string') return '';
    return str
        .replace(/([a-z0-9])([A-Z])/g, '$1.$2') // camelCase to dot
        .replace(/[^a-zA-Z0-9]+/g, '.')         // non-alphanum to dot
        .replace(/\.{2,}/g, '.')                // multiple dots to single
        .replace(/^[.]+|[.]+$/g, '')            // trim leading/trailing dots
        .toLowerCase();
}

// Examples:
// toDotCase('first name')        // 'first.name'
// toDotCase('user_id')           // 'user.id'
// toDotCase('SCREEN_NAME')       // 'screen.name'
// toDotCase('mobile-number')     // 'mobile.number'
// toDotCase('someCamelCase')     // 'some.camel.case'
// toDotCase(undefined)           // ''
// toDotCase(null)                // ''

