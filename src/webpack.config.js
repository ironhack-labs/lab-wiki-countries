const path = require('path');
const webpack = require('webpack');
const bundlePath = path.resolve(__dirname, '/dist');

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "bundle.js",
        publicPath: bundlePath
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {extensions: ['*', '.js', '.jsx']},
    plugins: [new webpack.HotModuleReplacementPlugin()],
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 3000,
        publicPath: "http://localhost:3000/dist",
        hot: true
    }
}