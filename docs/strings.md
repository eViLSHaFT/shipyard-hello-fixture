# String Utilities

This module provides utility functions for string manipulation.

## Functions

### `reverse(str: string): string`

Reverses a string.

**Parameters:**
- `str` - The string to reverse

**Returns:**
- The reversed string

**Example:**
```typescript
import { reverse } from './strings';

const result = reverse('hello');
console.log(result); // Output: 'olleh'

const reversed = reverse('TypeScript');
console.log(reversed); // Output: 'tpircSepyT'
```

---

### `titleCase(str: string): string`

Converts a string to title case (first letter of each word capitalized).

**Parameters:**
- `str` - The string to convert to title case

**Returns:**
- The title-cased string

**Example:**
```typescript
import { titleCase } from './strings';

const result = titleCase('hello world');
console.log(result); // Output: 'Hello World'

const titled = titleCase('the quick brown fox');
console.log(titled); // Output: 'The Quick Brown Fox'
```
