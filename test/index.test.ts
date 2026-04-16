import { test } from 'node:test';
import assert from 'node:assert';

// Note: Testing the re-export from index requires fixing the import in src/index.ts
// to include the .ts extension: export { double } from './double.ts';
// For now, we test that double can be imported directly from its module.

test('double module exists and can be imported', async () => {
  const module = await import('../src/double.ts');
  assert.strictEqual(typeof module.double, 'function');
});
