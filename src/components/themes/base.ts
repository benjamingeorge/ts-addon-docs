const breakpoints = ['640px', '960px', '1040px', '1360px', '1440px'];

const mediaQueries = {
    small: `@media screen and (min-width: ${breakpoints[0]})`,
    medium: `@media screen and (min-width: ${breakpoints[2]})`,
    large: `@media screen and (min-width: ${breakpoints[4]})`,
};

const space = [0, 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, 192, 256, 384, 512, 640, 768];

const fonts = {
    primary: "'Nexa', sans-serif",
};

/*
    Font Sizes
    Increments by an increasing step every 4 values.
    ex. [12  14 16 18 20   24 28 32 36   42 48 54 60   68 76 84 92]
*/
const fontSizes = [12];
let step = 0;
for (let i = 0; i < 16; i++) {
    if (i % 4 === 0) {
        step = step + 2;
    }
    fontSizes.push(fontSizes[fontSizes.length - 1] + step);
}

/*
    Note: we can't use named string values for font weights because of typescript :(
    light: 300,
    regular: 400,
    xbold: 700,
    heavy: 800,
    black: 900,
*/
//const fontWeights = [300, 400, 700, 800, 900];
const fontWeights = {
    light: 300,
    regular: 400,
    xbold: 700,
    heavy: 800,
    black: 900,
};
const lineHeights = [0.875, 0.925, 1, 1.125, 1.15, 1.25, 1.5];
const letterSpacings = ['-0.001em', '-0.01em', '-0.03em', '0.25em', '0.5em'];

/**
COLORS
To add a new array of shades:
 1) Go to: https://maketintsandshades.com
 2) Enter the root color.
 3) Paste this into the console. 
        var colors = $('.hex-color')
            .map((i, x) => x.getAttribute('style').replace('background-color:', ''))
            .toArray();
        var indices = [19, 17, 15, 13, 11, 2, 4, 6, 8];
        indices.reduce((acc, index) => {
            acc.push(colors[index]);
            return acc;
        }, []);
 4) copy the outputted array and paste here. 
 */
const colors = {
    black: '#161617',
    white: '#ffffff',
    gray: ['#e2e2e2', '#c5c5c5', '#a8a8a8', '#8b8b8b', '#6e6e6e', '#585858', '#424242', '#2c2c2c', '#161616'],

    plateGray: '#5a5e5a',
    plateGrays: ['#efefef', '#cecfce', '#adafad', '#7b7e7b', '#5a5e5a', '#484b48', '#363836', '#242624', '#121312'],

    onGray: '#ded7d2',
    onGrays: ['#f8f7f6', '#f2efed', '#ebe7e4', '#e5dfdb', '#ded7d2', '#b2aca8', '#85817e', '#595654', '#2c2b2a'],

    sunwashGold: '#d1b16e',
    sunwashGolds: ['#f6efe2', '#ede0c5', '#e3d0a8', '#dac18b', '#d1b16e', '#a78e58', '#7d6a42', '#54472c', '#2a2316'],

    gameRed: '#d7535c',
    gameReds: ['#f7ddde', '#efbabe', '#e7989d', '#df757d', '#d7535c', '#ac424a', '#813237', '#562125', '#2b1112'],

    trainingBlue: '#528799',
    trainingBlues: ['#dce7eb', '#bacfd6', '#97b7c2', '#759fad', '#528799', '#426c7a', '#31515c', '#21363d', '#101b1f'],

    earthGreen: '#80987b',
    earthGreens: ['#e6eae5', '#ccd6ca', '#b3c1b0', '#99ad95', '#80987b', '#667a62', '#4d5b4a', '#333d31', '#1a1e19'],

    calmPurple: '#8b89b5',
    calmPurples: ['#e8e7f0', '#d1d0e1', '#b9b8d3', '#a2a1c4', '#8b89b5', '#6f6e91', '#53526d', '#383748', '#1c1b24'],

    optimoOrange: '#f15f3c',
    optimoOranges: ['#fcdfd8', '#f9bfb1', '#f79f8a', '#f47f63', '#f15f3c', '#c14c30', '#913924', '#602618', '#30130c'],

    riverTeal: '#70c7ae',
    riverTeals: ['#e2f4ef', '#c6e9df', '#a9ddce', '#8dd2be', '#70c7ae', '#5a9f8b', '#437768', '#2d5046', '#162823'],

    /* DEPRECTATED */
    primary: [
        `hsl(41, 90%, 97%)`,
        `hsl(41, 90%, 94%)`,
        `hsl(41, 70%, 87%)`,
        `hsl(42, 60%, 70%)`,
        `hsl(41, 51%, 62%)`,
        `hsl(41, 60%, 30%)`,
        `hsl(43, 70%, 20%)`,
        `hsl(44, 90%, 10%)`,
    ],
    /* DEPRECTATED */
    accent: [
        [
            `hsl(348, 95%, 92%)`,
            `hsl(348, 95%, 85%)`,
            `hsl(346, 90%, 80%)`,
            `hsl(345, 85%, 68%)`,
            `hsl(345, 74%, 47%)`,
            `hsl(346, 70%, 35%)`,
            `hsl(347, 80%, 20%)`,
            `hsl(348, 90%, 15%)`,
        ],
        [
            `hsl(58, 98%, 92%)`,
            `hsl(57, 98%, 85%)`,
            `hsl(57, 95%, 80%)`,
            `hsl(55, 94%, 75%)`,
            `hsl(55, 94%, 54%)`,
            `hsl(54, 94%, 45%)`,
            `hsl(53, 95%, 35%)`,
            `hsl(53, 98%, 15%)`,
        ],
        [
            `hsl(89, 90%, 92%)`,
            `hsl(88, 90%, 85%)`,
            `hsl(88, 80%, 80%)`,
            `hsl(87, 70%, 70%)`,
            `hsl(86, 100%, 41%)`,
            `hsl(85, 80%, 35%)`,
            `hsl(85, 76%, 20%)`,
            `hsl(85, 90%, 13%)`,
        ],
    ],
};

// reactIconBase name is specific to react-icons lib.  don't change.
const reactIconBase = {
    color: colors.gray[5],
    size: 18,
};

export const base = {
    breakpoints,
    colors,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
    letterSpacings,
    space,
    reactIconBase,
    mediaQueries,
};
