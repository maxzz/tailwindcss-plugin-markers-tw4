# Tailwind CSS Plugin: Custom Checkbox & Radio Markers

A Tailwind CSS v4 plugin that adds customizable checkmarks and radio button indicators for form elements with light/dark mode support.

## Features

- ✅ Custom checkbox checkmarks with SVG
- ✅ Custom checkbox indeterminate state
- ✅ Custom radio button indicators
- 🌓 Built-in light/dark mode support
- 🎨 Fully customizable colors
- 📦 Lightweight and performant
- 🔧 TypeScript support

## Installation

```bash
npm install tailwindcss-plugin-markers-tw4
# or
pnpm add tailwindcss-plugin-markers-tw4
# or
yarn add tailwindcss-plugin-markers-tw4
```

## Usage

### Basic Setup (Default Colors)

Add the plugin to your Tailwind CSS configuration:

```javascript
// tailwind.config.js
import markersPlugin from 'tailwindcss-plugin-markers-tw4';

export default {
  plugins: [
    markersPlugin()
  ]
}
```

This will use the default colors:
- **Light mode**: Black markers (`#000000`)
- **Dark mode**: White markers (`#ffffff`)

### Custom Colors

You can customize the marker colors for both light and dark modes:

```javascript
// tailwind.config.js
import markersPlugin from 'tailwindcss-plugin-markers-tw4';

export default {
  plugins: [
    markersPlugin({
      light: '#3b82f6',  // Blue markers in light mode
      dark: '#60a5fa'     // Lighter blue in dark mode
    })
  ]
}
```

### HTML Usage

Simply use Tailwind's form classes on your checkbox and radio inputs:

```html
<!-- Checkbox -->
<input 
  type="checkbox" 
  class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300"
/>

<!-- Radio Button -->
<input 
  type="radio" 
  class="form-radio h-5 w-5 text-blue-600 border-gray-300"
/>

<!-- Indeterminate Checkbox (set via JavaScript) -->
<input 
  type="checkbox" 
  id="indeterminate-checkbox"
  class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300"
/>

<script>
  document.getElementById('indeterminate-checkbox').indeterminate = true;
</script>
```

## Examples

### Complete Form Example

```html
<div class="space-y-4 p-6">
  <!-- Checkbox Example -->
  <label class="flex items-center space-x-3">
    <input 
      type="checkbox" 
      class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
      checked
    />
    <span class="text-gray-900 dark:text-gray-100">Accept terms and conditions</span>
  </label>

  <!-- Radio Button Example -->
  <fieldset class="space-y-2">
    <legend class="text-sm font-medium text-gray-900 dark:text-gray-100">Choose an option:</legend>
    <label class="flex items-center space-x-3">
      <input 
        type="radio" 
        name="option" 
        class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
        checked
      />
      <span class="text-gray-700 dark:text-gray-300">Option 1</span>
    </label>
    <label class="flex items-center space-x-3">
      <input 
        type="radio" 
        name="option" 
        class="form-radio h-4 w-4 text-blue-600 border-gray-300 focus:ring-2 focus:ring-blue-500"
      />
      <span class="text-gray-700 dark:text-gray-300">Option 2</span>
    </label>
  </fieldset>

  <!-- Indeterminate Checkbox Example -->
  <label class="flex items-center space-x-3">
    <input 
      type="checkbox" 
      id="select-all"
      class="form-checkbox h-5 w-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500"
    />
    <span class="text-gray-900 dark:text-gray-100">Select all items</span>
  </label>
</div>
```

### Dark Mode Support

The plugin automatically applies different marker colors in dark mode:

```html
<div class="bg-white dark:bg-gray-800 p-6 rounded-lg">
  <input 
    type="checkbox" 
    class="form-checkbox h-5 w-5 text-blue-600 rounded"
    checked
  />
  <!-- In light mode: uses 'light' color option -->
  <!-- In dark mode: uses 'dark' color option -->
</div>
```

## Visual Examples

### Checkboxes

```
┌─────────────────────────────────────┐
│  ☐  Unchecked                       │
│  ☑  Checked (with custom marker)    │
│  ☒  Indeterminate (with dash)       │
└─────────────────────────────────────┘
```

### Radio Buttons

```
┌─────────────────────────────────────┐
│  ○  Unselected                      │
│  ◉  Selected (with custom dot)      │
└─────────────────────────────────────┘
```

## Color Options

The plugin accepts any valid CSS color format:

```javascript
markersPlugin({
  light: '#000000',           // Hex
  dark: 'rgb(255, 255, 255)'  // RGB
})

markersPlugin({
  light: 'hsl(220, 90%, 50%)', // HSL
  dark: '#60a5fa'              // Hex
})

markersPlugin({
  light: 'currentColor',       // Named/keyword
  dark: 'white'                // Named color
})
```

## Browser Support

This plugin works in all modern browsers that support:
- CSS custom properties
- SVG data URIs
- Dark mode (`prefers-color-scheme`)

## API Reference

### Plugin Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `light` | `string` | `'black'` | Color for markers in light mode |
| `dark` | `string` | `'white'` | Color for markers in dark mode |

### Generated Classes

The plugin generates the following CSS for Tailwind's form classes:

- `.form-checkbox:checked` - Checkbox checkmark
- `.form-checkbox:indeterminate` - Checkbox indeterminate state
- `.form-radio:checked` - Radio button dot
- `.dark .form-checkbox:checked` - Checkbox checkmark (dark mode)
- `.dark .form-checkbox:indeterminate` - Checkbox indeterminate (dark mode)
- `.dark .form-radio:checked` - Radio button dot (dark mode)

## TypeScript

This plugin includes TypeScript type definitions out of the box.

```typescript
import markersPlugin from 'tailwindcss-plugin-markers-tw4';

// Type-safe options
markersPlugin({
  light: '#3b82f6',
  dark: '#60a5fa'
})
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT © Max Zakharzhevskiy

## Links

- [GitHub Repository](https://github.com/maxzz/tailwindcss-plugin-markers-tw4)
- [NPM Package](https://www.npmjs.com/package/tailwindcss-plugin-markers-tw4)
- [Issue Tracker](https://github.com/maxzz/tailwindcss-plugin-markers-tw4/issues)

## Related

- [Tailwind CSS](https://tailwindcss.com/)
- [Tailwind CSS Forms Plugin](https://github.com/tailwindlabs/tailwindcss-forms)
