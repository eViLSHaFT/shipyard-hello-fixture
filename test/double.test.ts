import { test } from 'node:test';
import assert from 'node:assert';
import { double } from '../src/double.ts';

test('double returns twice the input for positive numbers', () => {
  assert.strictEqual(double(2), 4);
  assert.strictEqual(double(5), 10);
  assert.strictEqual(double(100), 200);
});

test('double returns twice the input for negative numbers', () => {
  assert.strictEqual(double(-2), -4);
  assert.strictEqual(double(-5), -10);
  assert.strictEqual(double(-100), -200);
});

test('double returns 0 when input is 0', () => {
  assert.strictEqual(double(0), 0);
});

test('double handles decimal numbers correctly', () => {
  assert.strictEqual(double(1.5), 3);
  assert.strictEqual(double(2.5), 5);
  assert.strictEqual(double(0.1), 0.2);
});
