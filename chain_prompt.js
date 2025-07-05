function toKebabCase(str) {
    // Step 1: Trim leading and trailing whitespace
    let trimmed = str.trim();

    // Step 2: Replace camelCase with spaces before capital letters
    let decamelized = trimmed.replace(/([a-z0-9])([A-Z])/g, '$1 $2');

    // Step 3: Replace sequences of spaces or underscores with a single dash
    let dashed = decamelized.replace(/[\s_]+/g, '-');

    // Step 4: Convert to lowercase
    return dashed.toLowerCase();
}

module.exports = { toKebabCase };