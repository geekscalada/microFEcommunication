const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"),
  ['sharedLib']
);


module.exports = {
  output: {
    uniqueName: "app",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      name: "app",
      filename: "remoteEntry.js",
      exposes: {
        "./motusMF": ".//src/app/home/home.module.ts",
        "./motusComponent": ".//src/app/home/home.page.ts",
      },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "commonlibrxjs": {
          singleton: true,
          // strictVersion: true,
          // requiredVersion: "^auto",
        },
        "commonlibrxjsv2": {
          singleton: true,
          // strictVersion: true,
          // requiredVersion: "^auto",
        },
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
        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),

  ],
};
