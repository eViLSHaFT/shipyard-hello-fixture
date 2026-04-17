import { test } from 'node:test';
import assert from 'node:assert';
import { reverse } from '../lib/reverse.ts';

test('reverse() reverses a simple string', () => {
  assert.strictEqual(reverse('hello'), 'olleh');
});

test('reverse() handles empty string', () => {
  assert.strictEqual(reverse(''), '');
});

test('reverse() handles single character', () => {
  assert.strictEqual(reverse('a'), 'a');
});

test('reverse() handles palindrome', () => {
  assert.strictEqual(reverse('racecar'), 'racecar');
});

test('reverse() handles strings with spaces', () => {
  assert.strictEqual(reverse('hello world'), 'dlrow olleh');
});

test('reverse() handles strings with special characters', () => {
  assert.strictEqual(reverse('hello!@#'), '#@!olleh');
});

test('reverse() handles unicode characters', () => {
  assert.strictEqual(reverse('café'), 'éfac');
});
