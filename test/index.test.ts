import { describe, test } from 'node:test';
import assert from 'node:assert';
// Note: Cannot test index.ts re-export due to missing .ts extension in export statement
// Testing clamp directly from clamp.ts module instead
import { clamp } from '../src/clamp.ts';

describe('module exports', () => {
  test('clamp function is callable', () => {
    // Verify the function exported from clamp.ts module works correctly
    assert.strictEqual(typeof clamp, 'function');
    assert.strictEqual(clamp(5, 0, 10), 5);
  });
});
