const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
     app: './src/index.js',
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
              test:/\.css$/,
              use:[
                  {loader:'style-loader'},
                  {
                      loader:'css-loader'
                  }
              ]
          },
          {
             test:/\.ts$/,
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
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title:'Out Management',
      }),
  ],
};
