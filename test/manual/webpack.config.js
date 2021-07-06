<<<<<<< HEAD
// eslint-disable-next-line import/no-extraneous-dependencies
const WebpackRtlPlugin = require('webpack-rtl-plugin');

const Self = require('../../');
=======
const Self = require("../../");
>>>>>>> 31b678c17af720cf1c80815f1771fe2fa2e6ae1f

const ENABLE_HMR =
  typeof process.env.ENABLE_HMR !== "undefined"
    ? Boolean(process.env.ENABLE_HMR)
    : true;

const ENABLE_ES_MODULE =
  typeof process.env.ES_MODULE !== "undefined"
    ? Boolean(process.env.ES_MODULE)
    : true;

const ENABLE_EXPERIMENTAL_USE_IMPORT_MODULE =
  typeof process.env.EXPERIMENTAL_USE_IMPORT_MODULE !== "undefined"
    ? Boolean(process.env.EXPERIMENTAL_USE_IMPORT_MODULE)
    : true;

module.exports = {
  mode: "development",
  output: {
    chunkFilename: "[name].chunk.js",
    publicPath: "/dist/",
    crossOriginLoading: "anonymous",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: [/\.module\.css$/i],
        use: [
          {
            loader: Self.loader,
          },
          {
            loader: "css-loader",
            options: {
              esModule: ENABLE_ES_MODULE,
            },
          },
        ],
      },
      {
        test: /\.module\.css$/i,
        use: [
          {
            loader: Self.loader,
            options: {
              esModule: ENABLE_ES_MODULE,
            },
          },
          {
            loader: "css-loader",
            options: {
              modules: true,
              esModule: ENABLE_ES_MODULE,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new Self({
      filename: '[name].client.css',
      chunkFilename: '[name].chunk.client.css',
      globalRTLFlag: 'rtlLanguageEnabled',
      // outputPublicPath: '/bundles/css/',
      experimentalUseImportModule: ENABLE_EXPERIMENTAL_USE_IMPORT_MODULE,
    }),
    new WebpackRtlPlugin(),
  ],
  devServer: {
    hot: ENABLE_HMR,
    contentBase: __dirname,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
  },
};
