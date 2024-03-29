const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: "./src/index.js",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devtool: "inline-source-map",
  devServer: {
    static: "./src",
    open: { app: { name: "chrome" } },
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      title: "Placeholder",
      favicon: "./src/favicon.ico",
      myPageHeader: "Hello World",
      template: "./src/index.html",
      filename: "index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,

        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,

        type: "asset/resource",
      },
    ],
  },
  optimization: {
    runtimeChunk: "single",
  },
};
