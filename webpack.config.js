const path = require('path');

module.exports = {
  entry: {
    xdtoast: path.resolve(__dirname, 'src/toast.js'),
    toast: path.resolve(__dirname, 'src/toast.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve('dist'),
    libraryTarget: 'module'
  },
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  experiments: {
    outputModule: true,
  }
};
