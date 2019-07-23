export type FontWeightNames = 'light' | 'regular' | 'xbold' | 'heavy' | 'black';
export type FontWeights = { [key in FontWeightNames]: number };

export interface MediaSizes {
    small: string;
    medium: string;
    large: string;
}

export interface ThemeInterface {
    name: string;
    breakpoints: string[];
    colors: any;
    fonts: { [key: string]: string };
    fontSizes: number[];
    fontWeights: FontWeights;
    lineHeights: number[];
    letterSpacings: string[];
    space: number[];
    reactIconBase: any;
    component: any;
    mediaQueries: MediaSizes;
}
