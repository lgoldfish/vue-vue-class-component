const path = require('path');
const config = require('./config.js');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, "..", "src/index.js"),
    output: {
        filename: '[name].js'
    },
    externals: {},
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg|json)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        name: 'images/[name].[hash:7].[ext]',
                    }
                }]
            },
            {
                test:/\.vue$/,
                use: {
                    loader:'vue-loader'
                }
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: { 
        extensions: ['.js', '.vue'],//省略import 时的后缀
        alias: { 'vue': 'vue/dist/vue.js' }
     }
}