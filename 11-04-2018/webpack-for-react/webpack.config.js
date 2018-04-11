const webpack = require('webpack');
const path = require('path');
module.exports = {
  mode: 'development',  //“Development Mode is optimized for speed and developer experience.
  entry: './src/index.js',// Specifies the entry point of your application;
  // this is where your React app lives and where the bundling process will begin 
  output: {// this is where the output file will be created in the directory mentioned
    //and in the name bundle.js
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',//this map is to be used only in development
  //devtool will create source maps to help you with debugging of your application.
  module: {//What types of modules your application will include, 
    //in our case we will support ESNext (Babel)
    rules: [//How we handle each different type of module
      {
        test: /\.(js)$/,//files with a .js extension
        exclude: /node_modules/,
        use: ['babel-loader']//use Babel, via babel-loader for translation
      }
    ]
  },
  devServer: {//it is the development server
   contentBase: path.join(__dirname,'public'),
   //Tell the server where to serve content from.
   open: true// it will automatically open the browser
  }
};