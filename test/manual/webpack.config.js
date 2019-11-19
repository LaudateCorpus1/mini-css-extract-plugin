const WebpackRtlPlugin = require('webpack-rtl-plugin');

const Self = require('../../');

module.exports = {
  mode: 'development',
  output: {
    chunkFilename: '[contenthash].js',
    publicPath: '/dist/',
    crossOriginLoading: 'anonymous',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [Self.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].client.css',
      chunkFilename: '[name].chunk.client.css',
      globalRTLFlag: 'rtlLanguageEnabled',
    }),
    new WebpackRtlPlugin(),
  ],
  devServer: {
    contentBase: __dirname,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};
