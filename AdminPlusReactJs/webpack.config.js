//required libs
const webpack = require('webpack');
const path = require('path');
var combineLoaders = require('webpack-combine-loaders');

var ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

//const PostcssImport = require('postcss-easy-import');
//const precss = require('precss');
//const autoprefixer = require('autoprefixer');


// Paths
const APP = path.join(__dirname, '/src/app');
const BUILD = path.join(__dirname, './build');
//const STYLE = path.join(__dirname, '/src/app/style.css');
const TEMPLATE = __dirname + '/src/app/templates/main_template.html';
const PUBLIC = __dirname + '/src/app/public';

const WSERVER = 'webpack/hot/dev-server';

//test server configs
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

var config = {
  entry: {
    app: APP + '/Main.jsx',
    webDev: WSERVER
  }, 
  output: {
    path: BUILD, 
    publicPath: '/',
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP,
        loader : 'babel'
      },
        {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract(
            combineLoaders([{
                    loader: 'css-loader',
                    query: {
                        modules: true,
                        localIdentName: '[name]__[local]___[hash:base64:5]'
                    }
                }])
            )
        }
    ]
  },
    // Source maps used for debugging information
    devtool: 'eval-source-map',
    // webpack-dev-server configuration
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: HOST,
      port: PORT,
      outputPath: BUILD
    },

    //automatic generation index.html
    plugins: [
        new HtmlWebpackPlugin({
            template: TEMPLATE,
            inject: 'body'
        }),
        new ExtractTextPlugin('styles-[hash].css'),
        new webpack.HotModuleReplacementPlugin(),
        new CopyWebpackPlugin([{ from: PUBLIC, to: BUILD }],
                               { ignore: ['.DS_Store']})
    ]  
};

module.exports = config;
