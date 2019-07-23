// Allows us to import image sources via Webpack's file-loader without TypeScript "Cannot find module" error.
declare module "*.gif" {
    const value: any;
    export default value;
}
