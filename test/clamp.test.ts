import { describe, test } from 'node:test';
import assert from 'node:assert';
import { clamp } from '../src/clamp.ts';

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
});
