const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: { 
      main: './src/iframe.js',
      // vendor: './src/js/vendor.js' 
    },
    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              use: {
                  loader: "babel-loader",
                  options: {
                      presets: ['@babel/preset-env']
                  }
              }
            },
            {
              test: /\.(sa|sc|c)ss$/,
              use: [
                  {
                    loader: MiniCssExtractPlugin.loader,
                    options: {
                      // hmr: process.env.NODE_ENV === 'development',
                      reloadAll: true
                    },
                  },
                  {
                    loader: "css-loader"
                  },
                  {
                    loader: 'postcss-loader',
                    options: {
                      plugins: function () { 
                        return [
                          require('precss'),
                          require('autoprefixer')
                        ];
                      }
                    }
                  },
                  {
                    loader: "sass-loader",
                  }
              ]
            },
            {
              test: /\.(html)$/,
              use: {
                loader: 'html-loader'
              }
            },
            {
              test: /\.(png|jpe?g|gif|svg)$/,
              use: {
                loader: "file-loader",
                options: {
                  name: '[name].[ext]',
                  outputPath: 'images',
                  esModule: false,
                }
              }
            },
        ]
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename:  '[name].[hash].css',
        chunkFilename: '[id].[hash].css',
      }),
      new HtmlWebpackPlugin({
        filename: 'iframe.html',
        template: 'src/iframe.html'
      }),
      new CopyPlugin([
        { from: './src/index.html', to: './' }
      ]),
    ]
}