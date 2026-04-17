import { test } from 'node:test';
import assert from 'node:assert';
import { reverse } from '../lib/reverse.js';

test('reverse() reverses a simple string', () => {
  assert.strictEqual(reverse('hello'), 'olleh');
});

test('reverse() handles empty string', () => {
  assert.strictEqual(reverse(''), '');
});

test('reverse() handles single character', () => {
  assert.strictEqual(reverse('a'), 'a');
});

test('reverse() handles palindromes', () => {
  assert.strictEqual(reverse('racecar'), 'racecar');
});

test('reverse() handles strings with spaces', () => {
  assert.strictEqual(reverse('hello world'), 'dlrow olleh');
});

test('reverse() handles strings with special characters', () => {
  assert.strictEqual(reverse('a!b@c#'), '#c@b!a');
});

test('reverse() handles strings with numbers', () => {
  assert.strictEqual(reverse('abc123'), '321cba');
});
