"use strict";

const path = require("path");
const webpack = require('webpack')
const validate = require('webpack-validator')

module.exports =  validate({
  devtool: "source-map", // ferramenta para debug no inspec do chrome
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    path.join(__dirname, "src", "index")
  ],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/static/" //guardado em memoria, nao existe no src do sistema
  },

  plugins:[new webpack.HotModuleReplacementPlugin()],

  module: {
    preLoaders:[{
      test: /\.js$/,
      exclude: /node_modules/,
      include: /src/,
      loader:'standard'
    }],
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        include: /src/,
        loader: "babel"
      }
    ]
  }
});
