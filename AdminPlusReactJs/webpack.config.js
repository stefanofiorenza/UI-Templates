//required libs
const webpack = require('webpack');
const path = require('path');
const precss = require('precss');
const autoprefixer = require('autoprefixer');

const PostcssImport = require('postcss-easy-import');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');


// Paths
const APP = path.join(__dirname, '/src/app');
const BUILD = path.join(__dirname, './build');
const STYLE = path.join(__dirname, '/src/app/style.css');
const TEMPLATE = __dirname + '/src/app/templates/main_template.html';
const PUBLIC = __dirname + '/src/app/public';

const WSERVER = 'webpack/hot/dev-server';

//test server configs
const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 8080;

var config = {
  entry: {
    app: APP + '/Main.jsx',
    style: STYLE,
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
      },{
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss'],
        include: APP
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
    
   // Configure PostCSS plugins
  postcss: function processPostcss(webpack) {  // eslint-disable-line no-shadow
    return [
      PostcssImport({
        addDependencyTo: webpack
      }),
      precss,
      autoprefixer({ browsers: ['last 2 versions'] })
    ];
  },
    //automatic generation index.html
    plugins: [
     new HtmlWebpackPlugin({
        template: TEMPLATE,
        inject: 'body'
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyWebpackPlugin([{ from: PUBLIC, to: BUILD }],
                               { ignore: ['.DS_Store']})
    ]  
};

module.exports = config;
