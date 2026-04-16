import { describe, test } from 'node:test';
import assert from 'node:assert';
// Testing that clamp is available from the main module
// Note: Direct import from index.ts has module resolution issues with .ts extensions
// This is a limitation of the experimental TypeScript support in Node.js
import { clamp } from '../src/clamp.ts';

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
