const path = require('path');
const SimpleProgressPlugin = require('webpack-simple-progress-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const rules = require('./webpack.parts');

module.exports = {
  entry: [
    path.resolve(__dirname, 'src', 'app.ts'),
    path.resolve(__dirname, 'src', 'assets', 'img', 'hqdefault.jpg')
  ],
  devtool: 'eval-source-map',
  mode: 'production',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [rules.typescript, rules.css, rules.img]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new SimpleProgressPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      templateParameters: {
        titulo: 'HangMan'
      }
    })
  ]
};
