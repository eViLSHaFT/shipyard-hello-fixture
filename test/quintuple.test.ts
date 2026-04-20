import { test } from 'node:test';
import assert from 'node:assert';
import { quintuple } from '../src/quintuple.ts';

test('quintuple multiplies a positive integer by 5', () => {
  assert.strictEqual(quintuple(3), 15);
  assert.strictEqual(quintuple(10), 50);
});

test('quintuple multiplies zero by 5', () => {
  assert.strictEqual(quintuple(0), 0);
});

test('quintuple multiplies a negative number by 5', () => {
  assert.strictEqual(quintuple(-4), -20);
  assert.strictEqual(quintuple(-7), -35);
});

test('quintuple multiplies a decimal number by 5', () => {
  assert.strictEqual(quintuple(2.5), 12.5);
  assert.strictEqual(quintuple(0.1), 0.5);
});

test('quintuple multiplies large numbers by 5', () => {
  assert.strictEqual(quintuple(1000), 5000);
  assert.strictEqual(quintuple(999999), 4999995);
});
