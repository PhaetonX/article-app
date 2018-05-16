var webpack = require("webpack")
var path = require("path")

process.noDeprecation = true

module.exports = {
  entry: "./src/index.js",
  output: {
      path: path.join(__dirname, 'public'),
      filename: "bundle.js",
      sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: 'babel-loader',
              query: {
                  presets: ['env', 'stage-0', 'react']
              }
          },
          {
              test: /\.css$/,
              use: ['style-loader','css-loader', {
                  loader: 'postcss-loader',
                  options: {
                    plugins: () => [require('autoprefixer')]
                  }}]
          }
      ]
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}