import light from '../../src/components/themes/light';
import dark from '../../src/components/themes/dark';
import { ThemeProvider } from 'styled-components';

export const contexts = [
    {
        icon: 'mirror', // a icon displayed in the Storybook toolbar to control contextual props
        title: 'Themes', // an unique name of a contextual environment
        components: [ThemeProvider],
        params: [
            // an array of params contains a set of predefined `props` for `components`
            { name: 'Light Theme', props: { theme: light }, default: true },
            { name: 'Dark Theme', props: { theme: dark } },
        ],
        options: {
            deep: true, // pass the `props` deeply into all wrapping components
            disable: false, // disable this contextual environment completely
            cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
        },
    },
    /* ... */ // multiple contexts setups are supported
];
