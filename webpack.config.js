const path = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            targets: {
              ios: '14.5.1',
              safari: '14.1'
            }
          }
        }
      }
    ]
  },
  entry: './src/assets/scripts/app.js',
  output: {
    filename: './assets/scripts/app.js',
    path: path.resolve(__dirname, 'dist')
  }
};
