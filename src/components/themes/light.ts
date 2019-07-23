import { ThemeInterface } from './interfaces';
import { base } from './base';

export default <ThemeInterface>{
    ...base,
    name: 'light',
    backgroundColor: base.colors.white,
    component: {
        text: {
            color: base.colors.black,
            lineHeight: base.lineHeights[5],
        },
        button: {
            bg: base.colors.black,
            color: base.colors.white,
        },
        formfield: {
            initial: {
                borderColor: base.colors.gray[1],
                helperTextColor: base.colors.gray[3],
            },
            active: {
                borderColor: base.colors.black,
                helperTextColor: base.colors.gray[3],
            },
            error: {
                borderColor: base.colors.accent[0][4],
                helperTextColor: base.colors.accent[0][4],
            },
            valid: {
                borderColor: base.colors.accent[2][4],
                helperTextColor: base.colors.accent[2][4],
            },
            disabled: {
                borderColor: base.colors.gray[2],
                helperTextColor: base.colors.gray[2],
            },
            readOnly: {
                borderColor: base.colors.gray[2],
                helperTextColor: base.colors.gray[2],
            },
        },
        toggle: {
            initial: {
                borderColor: base.colors.gray[1],
            },
            active: {
                borderColor: base.colors.primary[4],
            },
        },
    },
};
