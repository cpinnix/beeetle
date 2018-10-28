const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  devtool: "source-map",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    chunkFilename: "[name].bundle.js",
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
          // options: {
          //   presets: ["@babel/preset-env"]
          // }
        }
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { sourceMap: true, modules: true } }
        ]
      }
    ]
  },
  plugins: [
    new BundleAnalyzerPlugin({
      analyzerMode: "static",
      openAnalyzer: false
    }),
    new HtmlWebpackPlugin({
      title: "Custom template",
      // Load a custom template (lodash by default see the FAQ for details)
      template: "./src/index.html"
    })
  ],
  devServer: {
    historyApiFallback: true
  }
};
