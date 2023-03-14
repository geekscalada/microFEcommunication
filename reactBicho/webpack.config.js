const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');

module.exports = (options) => {
  return {
    entry: "./src/index.tsx",
    output: {
      filename: "bundle.js",
      publicPath: "auto",
      uniqueName: "react",
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: ["ts-loader"],
        },
        {
          test: /\.(css|scss)$/,
          use: ["style-loader", "css-loader"],
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
          use: ["file-loader"],
        },
      ],
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
      alias: {
        sharedLib: path.resolve(__dirname, '../soda/projects/commons-lib/src/public-api.ts'),
      },
    },
    plugins: [
      new ModuleFederationPlugin({
        // For remotes (please adjust)
        name: "react",
        library: {
          type: "var",
          name: "react",
        },
        filename: "remoteEntry.js", // <-- Meta Data
        exposes: {
          "./reactMF": "./src/App.tsx",
        },
        shared: {
          react: {
            singleton: true,
            requiredVersion: false,
          },
          "react-dom": {
            singleton: true,
            requiredVersion: false,
          },
          // "commonlibrxjs": {
          //   singleton: true,
            // strictVersion: true,
            // requiredVersion: "^auto",
          // },
          // "commonlibrxjsv2": {
          //   singleton: true,
          //   // strictVersion: true,
          //   // requiredVersion: "^auto",
          // },
          "commonlib3": {
            singleton: true,
            // strictVersion: true,
            // requiredVersion: "^auto",
          },
          "commonlib4": {
            singleton: true,
            // strictVersion: true,
            // requiredVersion: "^auto",
          },
        },
      }),

      new CopyWebpackPlugin({
        patterns: [
          {
            from: "./public/*.html",
          },
        ],
      }),
    ],

    devServer: {
      port: 8102,
      historyApiFallback: true,
      client: {
        overlay: {
          warnings: false,
          errors: true,
        },
      },
    },
  };
};
