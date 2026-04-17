/**
 * Reverses a string
 * @param s - The string to reverse
 * @returns The reversed string
 */
export function reverse(s: string): string {
  return s.split('').reverse().join('');
}
