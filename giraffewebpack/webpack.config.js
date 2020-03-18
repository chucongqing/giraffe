const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
  mode:'development',
  entry: {
     app: './src/app/App.tsx',
    print:'./src/app/print.js',

  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'src/app/build'),
  },
  devtool:'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'src/app/build'),
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
          title:'DouDou DID List',
      }),
  ],
};
