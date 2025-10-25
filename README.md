# Tailwind CSS v4 Overflow Overlay Plugin

A Tailwind CSS v4 plugin that adds overflow overlay utilities.

## Installation

```bash
npm install tailwindcss-plugin-overflow-tw4
# or
pnpm add tailwindcss-plugin-overflow-tw4
# or
yarn add tailwindcss-plugin-overflow-tw4
```

## Available Utilities

This plugin provides the following utilities:

#### Overflow Overlay Utilities

- `.overflow-overlay` - Sets `overflow: overlay` with fallback support
- `.overflow-x-overlay` - Sets `overflow-x: overlay` with fallback support
- `.overflow-y-overlay` - Sets `overflow-y: overlay` with fallback support

#### Smallscroll Utility

- `.smallscroll` - Adds thin, styled scrollbars for both Firefox and Chrome/WebKit browsers
  - Customizable via CSS variables:
    - `--sb-width`: Scrollbar width (default: 8px)
    - `--sb-radius`: Scrollbar thumb border radius (default: 4px)
    - `--sb-color`: Scrollbar color (default: #666b7a)

#### Resizer Utility

- `.resizer` - Adds a custom resize handle with a visual grip pattern

## Example

```html
<!-- Overflow overlay -->
<div class="overflow-overlay h-64 w-64">
  <!-- Content with overlay scrollbars -->
</div>

<!-- Vertical overlay scrollbar -->
<div class="overflow-y-overlay h-64">
  <!-- Content with vertical overlay scrollbar -->
</div>

<!-- Custom thin scrollbars -->
<div class="smallscroll overflow-auto h-64">
  <!-- Content with thin, styled scrollbars -->
</div>

<!-- Custom scrollbar colors -->
<div class="smallscroll overflow-auto h-64" style="--sb-color: #3b82f6">
  <!-- Blue scrollbars -->
</div>

<!-- Textarea with custom resize handle -->
<textarea class="resizer resize w-full h-32">
  <!-- Textarea with custom resize grip -->
</textarea>
```

## Usage

### Tailwind CSS v4

#### Method 1: CSS Import (Recommended for v4)

```css
/* In your main CSS file (e.g., `app.css` or `index.css`) */
@import "tailwindcss";
@plugin "tailwindcss-plugin-overflow-tw4";

/* or connect it to Tailwind CSS js configuration */
@config '../tailwind.config.js';
```

```css
/* or with a relative path if installed locally */
@import "tailwindcss";
@plugin "../node_modules/tailwindcss-plugin-overflow-tw4";
```

#### Method 2: JavaScript Configuration

```javascript
// Add the plugin to your Tailwind CSS v4 configuration:
// tailwind.config.js or tailwind.config.ts
import overflowPlugin from 'tailwindcss-plugin-overflow-tw4';

export default {
  plugins: [
    overflowPlugin,
  ],
};
```

```javascript
// Or if using ESM in a JavaScript file:
// tailwind.config.js
import overflowPlugin from 'tailwindcss-plugin-overflow-tw4';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [overflowPlugin],
};
```

### Tailwind CSS v3

For Tailwind CSS v3, use CommonJS format:

```javascript
// tailwind.config.js
const overflowPlugin = require('tailwindcss-plugin-overflow-tw4');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [overflowPlugin],
};
```

Or with ES modules:

```javascript
// tailwind.config.mjs
import overflowPlugin from 'tailwindcss-plugin-overflow-tw4';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  plugins: [overflowPlugin],
};
```

## Development

```bash
# Install dependencies
pnpm install
```

```bash
# Build the plugin
pnpm run build
```

```bash
# Debug the plugin
# Or use VS Code's debugger with the provided launch configuration.
pnpm run debug
```

```bash
# Publish the plugin to npm
pnpm run publish:npm
```

## Browser Compatibility

- **Overflow overlay**: Supported in Chromium-based browsers (Chrome, Edge, Opera). Falls back gracefully in other browsers.
- **Smallscroll**: Works in all modern browsers with optimized styling for both Firefox and WebKit/Blink browsers.
- **Resizer**: Works in WebKit/Blink browsers (Chrome, Edge, Safari, Opera).

## Requirements

- Node.js >= 18.0.0
- pnpm >= 10.0.0 (for development)
- Tailwind CSS v3.x or v4.x
