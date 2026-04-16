import { test } from 'node:test';
import assert from 'node:assert';
import { quad } from '../src/quad.ts';

test('quad multiplies positive integers by 4', () => {
  assert.strictEqual(quad(1), 4);
  assert.strictEqual(quad(2), 8);
  assert.strictEqual(quad(10), 40);
  assert.strictEqual(quad(100), 400);
});

test('quad multiplies negative numbers by 4', () => {
  assert.strictEqual(quad(-1), -4);
  assert.strictEqual(quad(-5), -20);
  assert.strictEqual(quad(-10), -40);
});

test('quad handles zero', () => {
  assert.strictEqual(quad(0), 0);
});

test('quad handles decimal numbers', () => {
  assert.strictEqual(quad(0.5), 2);
  assert.strictEqual(quad(2.5), 10);
  assert.strictEqual(quad(1.25), 5);
});

test('quad returns different value than input (except 0)', () => {
  // This test would fail if quad returned n instead of n*4
  assert.notStrictEqual(quad(1), 1);
  assert.notStrictEqual(quad(5), 5);
  assert.notStrictEqual(quad(-3), -3);
});

test('quad returns correct type', () => {
  assert.strictEqual(typeof quad(5), 'number');
  assert.strictEqual(typeof quad(0), 'number');
  assert.strictEqual(typeof quad(-1), 'number');
});
