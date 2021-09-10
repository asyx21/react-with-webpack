const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'eval-cheap-module-source-map',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: { path: path.join(__dirname, 'build'), filename: 'index.bundle.js' },
  mode: process.env.NODE_ENV || 'development',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.jsx', '.js', '.json'],
  },
  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 8080,
    devMiddleware: {
      publicPath: '/',
    },
    hot: true,
    static: {
      directory: path.join(__dirname, 'src'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        }],
      },
      {
        test: /\.(css|scss)$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'index.html'),
      favicon: './assets/favicon.ico',
    }),
  ],
};
