import { describe, test } from 'node:test';
import assert from 'node:assert';
import { clamp } from '../src/index.ts';

describe('clamp', () => {
  test('returns value when within range', () => {
    assert.strictEqual(clamp(5, 0, 10), 5);
    assert.strictEqual(clamp(0, 0, 10), 0);
    assert.strictEqual(clamp(10, 0, 10), 10);
  });

  test('clamps to min when value is below range', () => {
    assert.strictEqual(clamp(-5, 0, 10), 0);
    assert.strictEqual(clamp(-100, 0, 10), 0);
  });

  test('clamps to max when value is above range', () => {
    assert.strictEqual(clamp(15, 0, 10), 10);
    assert.strictEqual(clamp(100, 0, 10), 10);
  });

  test('works with negative ranges', () => {
    assert.strictEqual(clamp(-5, -10, -1), -5);
    assert.strictEqual(clamp(-15, -10, -1), -10);
    assert.strictEqual(clamp(0, -10, -1), -1);
  });

  test('works with decimal numbers', () => {
    assert.strictEqual(clamp(5.5, 0, 10), 5.5);
    assert.strictEqual(clamp(-0.5, 0, 10), 0);
    assert.strictEqual(clamp(10.5, 0, 10), 10);
  });

  test('handles edge case when min equals max', () => {
    assert.strictEqual(clamp(5, 10, 10), 10);
    assert.strictEqual(clamp(10, 10, 10), 10);
    assert.strictEqual(clamp(15, 10, 10), 10);
  });

  test('works with very large numbers', () => {
    assert.strictEqual(clamp(1e308, 0, 1e307), 1e307);
    assert.strictEqual(clamp(-1e308, -1e307, 0), -1e307);
  });

  test('works with very small differences', () => {
    assert.strictEqual(clamp(0.1, 0, 1), 0.1);
    assert.strictEqual(clamp(0.0001, 0, 0.001), 0.0001);
    assert.strictEqual(clamp(0.002, 0, 0.001), 0.001);
  });

  test('preserves exact boundary values', () => {
    assert.strictEqual(clamp(Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER, 0), Number.MIN_SAFE_INTEGER);
    assert.strictEqual(clamp(Number.MAX_SAFE_INTEGER, 0, Number.MAX_SAFE_INTEGER), Number.MAX_SAFE_INTEGER);
  });

  test('handles Infinity values', () => {
    assert.strictEqual(clamp(Infinity, 0, 10), 10);
    assert.strictEqual(clamp(-Infinity, 0, 10), 0);
    assert.strictEqual(clamp(5, -Infinity, Infinity), 5);
    assert.strictEqual(clamp(5, -Infinity, 10), 5);
    assert.strictEqual(clamp(5, 0, Infinity), 5);
  });

  test('handles NaN values', () => {
    assert.ok(Number.isNaN(clamp(NaN, 0, 10)));
    assert.ok(Number.isNaN(clamp(5, NaN, 10)));
    assert.ok(Number.isNaN(clamp(5, 0, NaN)));
  });

  test('works with zero as boundary', () => {
    assert.strictEqual(clamp(5, 0, 10), 5);
    assert.strictEqual(clamp(-5, -10, 0), -5);
    assert.strictEqual(clamp(0, -10, 10), 0);
    assert.strictEqual(clamp(-1, 0, 10), 0);
    assert.strictEqual(clamp(1, -10, 0), 0);
  });

  test('handles inverted range (min > max)', () => {
    // When min > max, the behavior should clamp to max (since Math.min is applied last)
    assert.strictEqual(clamp(5, 10, 0), 0);
    assert.strictEqual(clamp(15, 10, 0), 0);
    assert.strictEqual(clamp(-5, 10, 0), 0);
  });

  test('works with ranges crossing zero', () => {
    assert.strictEqual(clamp(-5, -10, 10), -5);
    assert.strictEqual(clamp(5, -10, 10), 5);
    assert.strictEqual(clamp(-15, -10, 10), -10);
    assert.strictEqual(clamp(15, -10, 10), 10);
  });

  test('preserves negative zero', () => {
    const result = clamp(-0, -1, 1);
    assert.strictEqual(result, -0);
    assert.strictEqual(Object.is(result, -0), true);
  });
});
