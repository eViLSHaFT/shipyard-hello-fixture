import { describe, test } from 'node:test';
import assert from 'node:assert';
import { clamp } from '../src/index.ts';

describe('module exports', () => {
  test('clamp function is exported and callable', () => {
    assert.strictEqual(typeof clamp, 'function');
  });

  test('clamp function works as expected from module', () => {
    // Test basic functionality
    assert.strictEqual(clamp(5, 0, 10), 5);
    assert.strictEqual(clamp(-5, 0, 10), 0);
    assert.strictEqual(clamp(15, 0, 10), 10);
  });

  test('clamp function handles edge cases from module', () => {
    assert.strictEqual(clamp(10, 10, 10), 10);
    assert.strictEqual(clamp(5.5, 0, 10), 5.5);
  });

  test('clamp function handles special numeric values', () => {
    assert.strictEqual(clamp(Infinity, 0, 10), 10);
    assert.strictEqual(clamp(-Infinity, 0, 10), 0);
    assert.ok(Number.isNaN(clamp(NaN, 0, 10)));
  });
});
