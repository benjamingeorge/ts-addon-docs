import React from 'react';
import styled, { css } from '../themes/styled';
import * as SS from 'styled-system';
import { themeGet } from '@styled-system/theme-get';
import { ifProp, switchProp, theme } from 'styled-tools';
import { removeProps } from '../utils';

interface Props {
    /** ReactRouter to prop */
    to?: any;
    className?: string;
    href?: string;
    type?: 'button' | 'submit';
    onClick?: (evt: any) => void;
    style?: any;
    color?: string;
    size?: 'small' | 'medium' | 'large';
    fill?: 'solid' | 'outline' | 'text';
    disabled?: boolean;
    raised?: boolean;
    theme?: any;
}

interface ButtonProps extends SS.SpaceProps, SS.WidthProps, SS.DisplayProps, SS.FlexProps {
    /** ReactRouter to prop */
    to?: any;
    children?: any;
    className?: string;
    href?: string;
    target?: string;
    type?: 'button' | 'submit';
    onClick?: (evt: any) => void;
    style?: any;
    color?: 'string';
    size?: 'small' | 'medium' | 'large';
    fill?: 'solid' | 'outline' | 'text';
    disabled?: boolean;
    raised?: boolean;
}

enum ButtonColors {
    primary = 'primary.4',
    secondary = 'secondary.4',
    warning = 'accent.0.4',
    success = 'accent.2.4',
}

/**
 * Workaround because styled-components won't remove styled-system props from DOM element.
 */
const PROPS_FILTER_REG = /^([mpfw][trblxy]?|as|bg|display|color|size|fill|raised|width)$/;
const Element = (props: Props) => {
    const { to, type, href, ...rest } = props;
    const filteredProps = removeProps(PROPS_FILTER_REG, rest);

    let asProps = {};
    let el: any;
    if (href && !to) {
        el = 'a';
        asProps = { href };
    } else {
        el = 'button';
        asProps = { type };
    }

    return React.createElement(el, { ...asProps, ...filteredProps });
};

function getButtonColor(p: Props): string {
    return themeGet(`colors.${p.color}`, themeGet('component.button.bg')(p))(p);
}

const Base: React.FunctionComponent<Props> = styled(Element)<Props>`
    ${SS.space};
    ${SS.width};
    ${SS.display};
    ${SS.flex};
    box-sizing: border-box;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;
    line-height: 1.125;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    position: relative;
    text-align: center;
    font-weight: ${ifProp({ size: 'large' }, theme('fontWeights.2'), theme('fontWeights.1'))};
    font-family: ${themeGet('fonts.primary')};
    font-size: ${themeGet('fontSizes.2')}px;
    transition: all 200ms;
    user-select: none;
    -webkit-font-smoothing: antialiased;

    ${p => p.raised && p.fill !== 'text' && 'box-shadow: 2px 2px 0 0 rgba(0,0,0,.1875)'};

    border-color: ${getButtonColor};

    ${switchProp('fill', {
        solid: css`
            background-color: ${getButtonColor};
            color: ${themeGet('component.button.color')};
            &:hover,
            &:active {
                color: ${themeGet('component.button.color')};
            }
            &:hover:not([disabled]):not(:active) {
                box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
            }
        `,
        outline: css`
            background: none;
            color: ${getButtonColor};
            &:hover,
            &:active {
                color: ${getButtonColor};
            }
            &:hover:not([disabled]):not(:active) {
                box-shadow: 3px 3px 0 0 rgba(0, 0, 0, 0.25);
            }
        `,
        text: css`
            border-color: transparent;
            background: none;
            color: ${getButtonColor};
            text-decoration: underline;
            &:hover {
                color: ${getButtonColor};
                background-color: rgba(0, 0, 0, 0.2);
            }
        `,
    })}

    ${switchProp('size', {
        small: css`
            padding: ${themeGet('space.2')}px ${themeGet('space.3')}px;
            font-size: ${themeGet('fontSizes.1')}px;
        `,
        medium: css`
            padding: 14px ${themeGet('space.6')}px 10px ${themeGet('space.6')}px;
        `,
        large: css`
            padding: 22px ${themeGet('space.7')}px 18px ${themeGet('space.7')}px;
        `,
    })}

    &:active {
        outline: none;
        top: 2px;
        left: 2px;
        box-shadow: none;
    }

    &[disabled] {
        background-color: ${themeGet('colors.gray.3')};
        color: ${themeGet('colors.gray.2')};
        border-color: ${themeGet('colors.gray.3')};
        pointer-events: none;
    }

    svg {
        transform: translateY(-1px);
    }
`;

export function Button({ color, children, ...rest }: ButtonProps) {
    return (
        <Base color={ButtonColors[color as any]} {...rest}>
            {children}
        </Base>
    );
}

Button.defaultProps = {
    disabled: false,
    display: 'inline-block',
    fill: 'solid',
    raised: true,
    size: 'large',
    type: 'button',
};

export default Button;
