const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // clears dist folder before each build
  },
  resolve: {
    extensions: ['.js', '.jsx'], // allow importing JS/JSX without extensions
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,      // handles JS and JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,          // handles Tailwind CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // your HTML template
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'dist'),
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'development',
};
