const path = require('path'); // Import the 'path' module

module.exports = {
  entry: path.resolve('src/toast.js'),  // Ensure the entry path is absolute
  output: {
    filename: 'xdtoast.js',
    path: path.resolve('dist'),  // Convert the output path to an absolute path
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
