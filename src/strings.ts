/**
 * Reverses a string.
 * @param str - The string to reverse
 * @returns The reversed string
 */
export function reverse(str: string): string {
  return str.split('').reverse().join('');
}

/**
 * Converts a string to title case (first letter of each word capitalized).
 * @param str - The string to convert to title case
 * @returns The title-cased string
 */
export function titleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
