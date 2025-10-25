import { overflowPlugin } from '../src/index.js';
import type * as plugin from 'tailwindcss/plugin';

console.log('='.repeat(60));
console.log('Testing Tailwind CSS Overflow Overlay Plugin');
console.log('='.repeat(60));
console.log();

// Mock utilities storage
const utilities: Record<string, any>[] = [];

// Mock PluginAPI
const mockPluginAPI: plugin.PluginAPI = {
    addUtilities: (newUtilities: Record<string, any>) => {
        utilities.push(newUtilities);
        console.log('✓ addUtilities called with:', JSON.stringify(newUtilities, null, 2));
    },
    addComponents: (components: Record<string, any>) => {
        console.log('addComponents called (not used in this plugin)');
    },
    addBase: (base: Record<string, any>) => {
        console.log('addBase called (not used in this plugin)');
    },
    addVariant: (name: string, definition: any) => {
        console.log('addVariant called (not used in this plugin)');
    },
    matchUtilities: (utilities: Record<string, any>, options?: any) => {
        console.log('matchUtilities called (not used in this plugin)');
    },
    matchComponents: (components: Record<string, any>, options?: any) => {
        console.log('matchComponents called (not used in this plugin)');
    },
    matchVariant: (name: string, definition: any, options?: any) => {
        console.log('matchVariant called (not used in this plugin)');
    },
    theme: (path: string, defaultValue?: any) => defaultValue,
    config: (path: string, defaultValue?: any) => defaultValue,
    corePlugins: (path: string) => true,
    e: (className: string) => className,
    prefix: (className: string) => className,
} as any;

console.log('Running plugin with mocked PluginAPI...');
console.log();

try {
    // Execute the plugin function with mocked API
    overflowPlugin(mockPluginAPI);
    
    console.log();
    console.log('='.repeat(60));
    console.log('Plugin executed successfully!');
    console.log('='.repeat(60));
    console.log();
    console.log(`Total utility groups added: ${utilities.length}`);
    console.log();
    
    utilities.forEach((utilGroup, index) => {
        console.log(`Utility group ${index + 1}:`);
        console.log(JSON.stringify(utilGroup, null, 2));
        console.log();
    });
    
    console.log('='.repeat(60));
    console.log('✓ Test completed successfully!');
    console.log('='.repeat(60));
} catch (error) {
    console.error();
    console.error('✗ Error executing plugin:');
    console.error(error);
    process.exit(1);
}
