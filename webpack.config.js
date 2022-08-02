const path = require("path");

module.exports = {
  mode: "production",
  entry: "./src/mainIndex.js",
  output: {
    path: path.resolve("lib"),
    filename: "index.js",
    libraryTarget: "commonjs2",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["env", "react", "stage-0"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },

      {
        test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
        loader: "url-loader?limit=100000",
      },
    ],
  },
  resolve: {
    alias: {
      react: path.resolve(__dirname, "./node_modules/react"),
      "react-dom": path.resolve(__dirname, "./node_modules/react-dom"),
    },
  },
  externals: [
    {
      // Don't bundle react or react-dom
      react: {
        commonjs: "react",
        commonjs2: "react",
        amd: "React",
        root: "React",
      },
      "react-dom": {
        commonjs: "react-dom",
        commonjs2: "react-dom",
        amd: "ReactDOM",
        root: "ReactDOM",
      },
      "@mui/material": {
        root: "MaterialUI",
        commonjs: "@mui/material",
        commonjs2: "@mui/material",
        amd: "@mui/material",
      },
    },
    /@mui\/.*/,

    "@mui/material",
    "@mui/icons-material",
    /@mui\/material\/*./,
    /@mui\/icons-material\/*./,
    externalMaterialUI,
  ],
};

function externalMaterialUI(_, module, callback) {
  var isMaterialUIComponent = /^@mui\/material\/([^/]+)$/;
  var match = isMaterialUIComponent.exec(module);
  if (match !== null) {
    var component = match[1];
    return callback(null, `window["material-ui"].${component}`);
  }
  callback();
}
