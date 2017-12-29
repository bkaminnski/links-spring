var webpack = require("webpack");
var path = require('path');

module.exports = {
  entry: {
    app: "./src/app.js",
    vendor: ["react", "react-dom", "pubsub-js", "jquery", "bootstrap-sass"],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: "vendor", filename: "vendor.bundle.js" }),
    new webpack.ProvidePlugin({
      $: 'jquery', jQuery: 'jquery'
    })
  ],
  output: {
    path: path.join(__dirname, '../service/src/main/resources/static/app'),
    filename: 'app.js',
    publicPath: 'app/'
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.woff$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.woff2$/,
        loader: "url-loader?limit=10000&mimetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "file-loader"
      },
      {
        test: /\.eot$/,
        loader: "file-loader"
      },
      {
        test: /\.svg$/,
        loader: "file-loader"
      },
      {
        test: require.resolve("react"),
        loader: "expose-loader?React"
      },
      {
        test: require.resolve("react-dom"),
        loader: "expose-loader?ReactDOM"
      },
      {
        test: require.resolve("jquery"),
        loader: "expose-loader?$"
      }
    ]
  }
};