const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
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
