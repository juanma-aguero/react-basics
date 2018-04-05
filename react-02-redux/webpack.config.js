/**
* @Author Juan Manuel Agüero
* @Details Webpack config file for adding new vendors, defining entry points and shimming modules.
*/
var webpack = require('webpack');
var path = require("path");

var node_dir = __dirname + '/node_modules',
public_dir = 'www';


module.exports = {
    mode: 'development',
    entry: {
        basicsApp: './src/app',
    },
    devServer: {
        contentBase: './www'
    },
    output: {
        path: path.join(__dirname, public_dir),
        filename: "dist/js/[name].bundle.js"
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                exclude: node_dir,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['babel-preset-react','babel-preset-env']
                    }
                }
            }
        ]
    }
};
