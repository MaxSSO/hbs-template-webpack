const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {

  entry: {
    app: path.resolve(__dirname, './src/app.js')
  },

  module: {
    rules: [
      {
        test: /\.hbs$/,
        use: 'handlebars-loader'
      }
    ]
  },

  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js'
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'Hello HBS',
      template: path.resolve(__dirname, './src/public/index.hbs'),
      templateParameters: {
        title: 'Handlebars',
        message: 'A simple Handlebars template sample with Webpack.'
      }
    })
  ],

  mode: 'production'

}

module.exports = config
