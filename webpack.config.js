var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    target: 'electron-renderer',
    context: path.join(__dirname, 'src'),
    devtool: 'source-map',
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        modules: [
            path.join(__dirname, './src'), "node_modules"
        ]
    },
    entry: {
        index: './index.tsx',
        application: './application.ts'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [{
                        loader: 'style-loader'
                    },
                    {
                        loader: 'css-loader'
                    }
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                loader: 'url-loader?limit=8192&name=images/[hash:8].[name].[ext]'
            }
        ]
    },
    plugins: [
        new CopyWebpackPlugin([{
                from: './pages/index.html'
            },
            {
                from: './assets',
                to: './assets'
            },
        ]),
    ]
};