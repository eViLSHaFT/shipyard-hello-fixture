/**
 * Reverses a string.
 * @param input - The string to reverse
 * @returns The reversed string
 */
export function reverse(input: string): string {
  return input.split("").reverse().join("");
}
