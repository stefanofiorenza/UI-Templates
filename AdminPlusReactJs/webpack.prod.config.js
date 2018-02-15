//required libs
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const PostcssImport = require('postcss-easy-import');

// Paths
const APP = path.join(__dirname, '/src/app');
const BUILD = path.join(__dirname, '../LMS-UI/src/main/webapp');
const STYLE = path.join(__dirname, '/src/app/style.css');
const PUBLIC = __dirname + '/src/app/public';
const TEMPLATE = __dirname + '/src/app/templates/main_template.html';

const PACKAGE = Object.keys(
  require('./package.json').dependencies
);

//test server configs
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

var config = {
  entry: {
    app: APP + '/Main.jsx',
    style: STYLE,
    vendor: PACKAGE
  }, 
  output: {
    path: BUILD,
    filename: '[name].[hash].js',
    chunkFilename: '[hash].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module : {
    loaders : [
      {
        test : /\.jsx?$/,
        include : APP,
        loader : 'babel'
      },{
          test: /\.css$/,
          loader: ExtractTextPlugin.extract('style', 'css!postcss'),
          include: APP
      }
    ]
  },

  // Configure PostCSS plugins (avoid underscore for partial css)
    postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    return [
      PostcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
     
    /* postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    return [
      postcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },*/


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
     new CleanPlugin([BUILD]),
     new HtmlWebpackPlugin({
        template: TEMPLATE,
        inject: 'body'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new ExtractTextPlugin('[name].[hash].css'),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('production')
        }
      }),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false
        }
      }),
      new CopyWebpackPlugin([{ from: PUBLIC, to: BUILD }],
                               { ignore: ['.DS_Store']})
  ]  
};

module.exports = config;
