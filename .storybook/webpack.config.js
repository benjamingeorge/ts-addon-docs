const path = require('path');

module.exports = async ({ config }) => {
    config.module.rules.push({
        test: /\.stories\.[tj]sx?$/,
        loader: require.resolve('@storybook/source-loader'),
        options: {
            injectParameters: true,
            inspectLocalDependencies: false,
            inspectDependencies: false,
        },
        include: [path.resolve(__dirname, '../src')],
        enforce: 'pre',
    });
    return config;
};
