import * as styledComponents from "styled-components";
import { ThemeInterface } from "./interfaces";

/**
 * This is REQUIRED to use styled-components with Typescript
 */

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<ThemeInterface>;

export { css, createGlobalStyle, keyframes, ThemeProvider };
export default styled;
