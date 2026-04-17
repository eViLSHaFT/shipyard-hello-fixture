import { describe, test } from 'node:test';
import assert from 'node:assert';
import { reverse } from '../lib/reverse.js';

describe('reverse', () => {
  test('reverses a simple string', () => {
    assert.strictEqual(reverse('hello'), 'olleh');
  });

  test('reverses a single character', () => {
    assert.strictEqual(reverse('a'), 'a');
  });

  test('returns empty string for empty input', () => {
    assert.strictEqual(reverse(''), '');
  });

  test('reverses a string with spaces', () => {
    assert.strictEqual(reverse('hello world'), 'dlrow olleh');
  });

  test('reverses a string with special characters', () => {
    assert.strictEqual(reverse('a!b@c#'), '#c@b!a');
  });

  test('reverses a string with numbers', () => {
    assert.strictEqual(reverse('123456'), '654321');
  });

  test('reverses a palindrome remains the same', () => {
    assert.strictEqual(reverse('racecar'), 'racecar');
    assert.strictEqual(reverse('noon'), 'noon');
  });

  test('reverses a string with accented characters', () => {
    assert.strictEqual(reverse('café'), 'éfac');
    assert.strictEqual(reverse('naïve'), 'evïan');
  });

  test('reverses a mixed case string', () => {
    assert.strictEqual(reverse('AbCdEf'), 'fEdCbA');
  });

  test('reverses a string with punctuation', () => {
    assert.strictEqual(reverse('Hello, World!'), '!dlroW ,olleH');
  });
});
