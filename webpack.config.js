const Dotenv = require('dotenv-webpack');
const path = require('path');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist/assets/js'),
  },
  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, '.env'),
    }),
  ],
  node: {
    fs: 'empty',
  },
};
