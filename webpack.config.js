const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = function(env, argv) {
    const { mode } = argv;

    return {
        context: path.join(__dirname, 'src'),

        entry: './docs/index.tsx',

        output: {
            publicPath: '/',
            path: path.join(__dirname, './dist'),
            filename: '[name].bundle.js',
        },

        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx'],
        },

        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        // disable type checker - we will use it in fork plugin
                        transpileOnly: true,
                    },
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ['file-loader'],
                },
            ],
        },

        plugins: [
            new webpack.DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify(mode),
            }),
            new HtmlWebpackPlugin({
                template: './docs/index.html',
            }),
            new ForkTsCheckerWebpackPlugin({
                tsconfig: path.resolve(__dirname, 'tsconfig.json'),
                async: false,
            }),
        ],

        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            port: 9002,
            clientLogLevel: 'error',
            open: true,
            overlay: true,
            index: 'index.html',
        },
    };
};
