var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
	'./src/less/base.less',
    './src/main.js',
    'webpack-dev-server/client?http://localhost:8080'
  ],
  output: {
      publicPath: '/',
      filename: 'build.js'
  },
  debug: true,
  devtool: 'source-map',
  module: {
    loaders: [
      { 
		test: /\.js$/,       
		exclude:/node-moules/,
		loaders:['react-hot','babel?presets[]=react,presets[]=es2015']
      },
	  { 
		test: /\.css$/, 
		loader: 'style!css'
	  },
	  { 
		test: /\.less$/,
		loader: "style!css!autoprefixer!less"
      },
	  
    ]
  },
  devServer: {
    contentBase: "./src"
  } 
};
