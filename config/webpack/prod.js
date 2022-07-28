const paths = require('../paths')
const {
  merge
} = require('webpack-merge')
const common = require('./common')

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default
const TerserPlugin = require('terser-webpack-plugin');
module.exports = merge(common, {
  mode: 'production',
  entry: {
    index: {
      import: `${paths.src}/index.js`,
      dependOn: ['react', 'helpers']
    },
    react: ['react', 'react-dom', 'prop-types'],
    helpers: ['immer', 'nanoid']
  },
  devtool: false,
  output: {
    filename: 'js/[name].[contenthash].bundle.js',
    publicPath: './'
  },
  module: {
    rules: [{
      test: /\.(c|sa|sc)ss$/i,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'sass-loader'
      ]
    }]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          ecma: undefined,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          module: false,
          // Deprecated
          output: null,
          format: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: true,
          keep_fnames: true,
          safari10: false,
        },
      }),
    ],

  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
})