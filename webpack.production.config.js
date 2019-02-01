var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules\/(?!react-router).*/, loader: 'babel-loader?experimental&optional=runtime'},
      {test: /\.css$/, loader: 'style-loader!css-loader'},
      {test: /\.(png|jpg|svg)$/, loader: 'url-loader?limit=8192'},
      {test: /\.scss$/, loader: "style!css!sass"},
      {test: /\.(eot|svg|ttf|otf|woff|woff2)$/, loader: 'file?name=[name].[ext]'}
    ]
  },
  node: {
    fs: 'empty'
  }
};