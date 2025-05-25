import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';
import { fileURLToPath } from 'url';


// filepath ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


//
export default {
  entry: {
    xdtoast: path.resolve(__dirname, 'src/toast.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'module',
    clean: true,
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
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { drop_console: true },
          format: { comments: false },
        },
        extractComments: false,
      })
    ],
  },
};
