const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true, // Clears dist folder before each build
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'], // ✅ Support for TypeScript and JS
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,  // ✅ Handles both TSX and JSX
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,             // ✅ Tailwind CSS
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i, // ✅ Images
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // ✅ Your HTML template
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, 'build'),
    port: 3000,
    open: true,
    hot: true,
  },
  mode: 'development',
};
