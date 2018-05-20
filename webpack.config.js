var path = require("path")

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
              loader: require.resolve('babel-loader'),
              options: {
                // This is a feature of `babel-loader` for Webpack (not Babel itself).
                // It enables caching results in ./node_modules/.cache/babel-loader/
                // directory for faster rebuilds.
                cacheDirectory: true,
                plugins: ['react-hot-loader/babel'],
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