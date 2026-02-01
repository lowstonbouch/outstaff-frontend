# @outstaff-frontend/utils

Reusable utility functions for the Outstaff Frontend application.

## Utilities

### String Utilities

#### `truncate(text: string, maxLen: number): string`

Truncates a string to a specified maximum length, adding an ellipsis (…) if truncated.

**Parameters:**
- `text` - The string to truncate
- `maxLen` - Maximum length of the resulting string

**Example:**
```typescript
import { truncate } from '@outstaff-frontend/utils';

truncate('This is a long text that needs to be shortened', 20);
// Returns: "This is a long text…"
```

### Date Utilities

#### `formatDate(iso: string, locale?: string): string`

Formats an ISO date string into a human-readable format.

**Parameters:**
- `iso` - ISO 8601 date string
- `locale` - Optional locale for formatting (defaults to 'en-US')

**Example:**
```typescript
import { formatDate } from '@outstaff-frontend/utils';

formatDate('2024-01-31T12:00:00Z');
// Returns: "January 31, 2024"

formatDate('2024-01-31T12:00:00Z', 'ru-RU');
// Returns: "31 января 2024 г."
```

## Usage

Install the package in your workspace:

```json
{
  "dependencies": {
    "@outstaff-frontend/utils": "workspace:*"
  }
}
```

Then import the utilities you need:

```typescript
import { truncate, formatDate } from '@outstaff-frontend/utils';
```
