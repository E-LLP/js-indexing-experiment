var path = require("path");
module.exports = {
  entry: {
    react: './js/react.jsx'
  },
  output: {
    path: path.join(__dirname, "assets"),
    filename: "[name].bundle.js",
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
}
