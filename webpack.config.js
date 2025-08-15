const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/main.ts'),
    },
    output: {
        filename: '[contenthash:8].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    devServer: {
        static: {
          directory: path.join(__dirname, 'dist'), // Or your desired content base
        },
        port: 8080, // Or your preferred port
        open: true,
        historyApiFallback: true,
        hot: true, // Enable Hot Module Replacement
    },
        plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname, './src/template.html'), // шаблон
            filename: 'index.html', // output file
            inject: 'body', // script tags will be injected into the body
        }),    
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash:8].css', // output CSS file name
            chunkFilename: '[id].[contenthash:8].css',
            ignoreOrder: true // chunk CSS file name
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(s*)css$/i,
                use: [
                    MiniCssExtractPlugin.loader, "css-loader", "sass-loader"
                ],
                // use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.ts?$/,
                use: ['ts-loader', 'babel-loader'],
                exclude: /node_modules/,
            },
             // images rules 
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
             // fonts and SVG
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },

};