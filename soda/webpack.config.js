const {
  shareAll,
  withModuleFederationPlugin,
} = require("@angular-architects/module-federation/webpack");

module.exports = withModuleFederationPlugin({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: false,
      requiredVersion: "auto",
    }),
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

  },
  sharedMappings: ["sharedLib"],
  // devtool: "source-map"  <-- don't use this, it will break the build, debug
});


