import { describe, test } from 'node:test';
import { strictEqual } from 'node:assert';
import { reverse } from '../lib/reverse.js';

describe('reverse', () => {
  test('reverses a simple string', () => {
    strictEqual(reverse('hello'), 'olleh');
  });

  test('reverses a single character', () => {
    strictEqual(reverse('a'), 'a');
  });

  test('returns empty string for empty input', () => {
    strictEqual(reverse(''), '');
  });

  test('reverses a string with spaces', () => {
    strictEqual(reverse('hello world'), 'dlrow olleh');
  });

  test('reverses a string with special characters', () => {
    strictEqual(reverse('a!b@c#'), '#c@b!a');
  });

  test('reverses a string with numbers', () => {
    strictEqual(reverse('123456'), '654321');
  });

  test('reverses a palindrome remains the same', () => {
    strictEqual(reverse('racecar'), 'racecar');
    strictEqual(reverse('noon'), 'noon');
  });

  test('reverses a string with accented characters', () => {
    strictEqual(reverse('café'), 'éfac');
    strictEqual(reverse('naïve'), 'evïan');
  });

  test('reverses a mixed case string', () => {
    strictEqual(reverse('AbCdEf'), 'fEdCbA');
  });

  test('reverses a string with punctuation', () => {
    strictEqual(reverse('Hello, World!'), '!dlroW ,olleH');
  });
});
