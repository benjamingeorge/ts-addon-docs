/**
 * const REG = /^([mpfw][trblxy]?|outline|small|fullwidth|width|color|bg)$/;
   removeProps(REG, props)
 * @param {RegExp} REG
 * @param {object} props
 */
export const removeProps = (REG: RegExp, props: any) => {
    const next: any = {};

    for (let key in props) {
        if (REG.test(key)) {
            continue;
        }
        next[key] = props[key];
    }

    return next;
};
