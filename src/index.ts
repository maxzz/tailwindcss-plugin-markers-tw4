import plugin, { type PluginAPI } from 'tailwindcss/plugin';

import svgToDataUri from 'mini-svg-data-uri';

type Options = {
    light: string;
    dark: string;
};

export const fixInputs: ReturnType<typeof plugin.withOptions<Options>> = plugin.withOptions<Options>(
    (options = { light: 'black', dark: 'white' }) => (api: PluginAPI) => {
        markersPlugin(options, api);
    }
);

export default fixInputs;


function markersPlugin(options: Options = { light: 'black', dark: 'white' }, api: PluginAPI) {
    const light = options.light;
    const dark = options.dark;

    api.addComponents({
        '.form-checkbox:checked': {
            'background-image': svgCheckbox(light),
        },
        '.dark .form-checkbox:checked': {
            'background-image': svgCheckbox(dark),
        },

        '.form-checkbox:indeterminate': {
            'background-image': svgCheckboxIndeterminate(light),
        },
        '.dark .form-checkbox:indeterminate': {
            'background-image': svgCheckboxIndeterminate(dark),
        },

        '.form-radio:checked': {
            'background-image': svgRadio(light),
        },
        '.dark .form-radio:checked': {
            'background-image': svgRadio(dark),
        },
    });
}

function svgCheckbox(color: string) {
    return `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${color}" xmlns="http://www.w3.org/2000/svg"><path d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"/></svg>`
    )}")`;
}

function svgCheckboxIndeterminate(color: string) {
    return `url("${svgToDataUri(
        `<svg xmlns="http://www.w3.org/2000/svg" fill="${color}" viewBox="0 0 16 16"><path stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h8"/></svg>`
    )}")`;
}

function svgRadio(color: string) {
    return `url("${svgToDataUri(
        `<svg viewBox="0 0 16 16" fill="${color}" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="3"/></svg>`
    )}")`;
}
