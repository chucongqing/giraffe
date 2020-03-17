const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
     app: './src/App.tsx',
    print:'./src/print.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 9000
  },
  module:{
      rules:[
          {
              test:/\.(js|jsx)$/,
              exclude:/(node_modules|bower_components)/,
              loader:"babel-loader",
              options:{presets:["@babel/env"]}
          },
          {
              test:/\.css$/,
              use:[
                  {loader:'style-loader'},
                  {
                      loader:'css-loader'
                  }
              ]
          },
          {
             test:/\.(ts|tsx)$/,
             use:'ts-loader'
          },
          {
              test:/\.(png|svg|jpg|gif)$/,
              use:[
                  'file-loader'
              ]
          }
      ]
  },
  resolve:{extensions:["*",".js",".jsx",".ts",".tsx"]},
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title:'Out Management1',
      }),
  ],
};
