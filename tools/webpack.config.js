var webpack = require('webpack')
var path = require('path')
var config = require('../backend/config')

var __PROD__ = config.env === 'production';
var __DEV__ = config.env === 'development';

//----------------------------------------------
// Define webpack object
//----------------------------------------------
var webpackConfig = {
  context: path.join(__dirname, '../'),
  module: {},
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
}


//----------------------------------------------
// Entry points
//----------------------------------------------
var appEntryPoint = []

if(__DEV__ ) appEntryPoint.push('webpack-dev-server/client?http://localhost:3000')
if(__DEV__ ) appEntryPoint.push('webpack/hot/only-dev-server')
appEntryPoint.push('./frontend/index.js')

webpackConfig.entry = {
  app: appEntryPoint,
  vendor: ['react', 'react-dom', 'react-redux', 'redux'],
}


//----------------------------------------------
// Output
//----------------------------------------------
webpackConfig.output = {
  filename: 'index.bundle.js',
  path: path.join(__dirname, '../build/public/'),
  publicPath: '/public/'
}

//----------------------------------------------
// Plugins
//----------------------------------------------

var plugins = webpackConfig.plugins = []



plugins.push(
  new webpack.DefinePlugin({
    __DEV__ : __DEV__,
    __PROD__: __PROD__,
    'process.env':{
      'NODE_ENV': __PROD__ ? JSON.stringify('production') : JSON.stringify('development')
    }
  }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.bundle.js' })
)

if (__DEV__) {
  plugins.push(new webpack.HotModuleReplacementPlugin())
}
else if (__PROD__) {
  plugins.push(
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        unused: true,
        dead_code: true,
        warnings: true
      }
    })
  )
}



//----------------------------------------------
// Loaders
//----------------------------------------------

var loaders = webpackConfig.module.loaders = []

// Javascript & json
loaders.push({
  test: /\.js$/,
  exclude: /node_modules/,
  loaders: ['babel-loader']
}, {
  test: /\.json$/,
  loader: 'json'
})

//----------------------------------------------
// Expose webpack configuation
//----------------------------------------------
module.exports = webpackConfig
