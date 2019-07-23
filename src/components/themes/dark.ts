import { ThemeInterface } from './interfaces';
import { base } from './base';

export default <ThemeInterface>{
    ...base,
    name: 'dark',
    backgroundColor: base.colors.black,
    component: {
        text: {
            color: base.colors.white,
            lineHeight: base.lineHeights[5],
        },
        button: {
            bg: base.colors.white,
            color: base.colors.black,
        },
        formfield: {
            initial: {
                borderColor: base.colors.gray[5],
                helperTextColor: base.colors.gray[3],
            },
            active: {
                borderColor: base.colors.white,
                helperTextColor: base.colors.gray[2],
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
                borderColor: base.colors.gray[5],
            },
            active: {
                borderColor: base.colors.primary[4],
            },
        },
    },
};
