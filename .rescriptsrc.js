const fs = require("fs");
const path = require("path");
const lessToJs = require("less-vars-to-js");
const AntDesignThemePlugin = require("./lib/antd-theme-webpack-plugin");
const generatorColorLess = require("./lib/generatorColorLess");

module.exports = [
  ["use-babel-config", ".babelrc"],
  ["use-eslint-config", ".eslintrc"],
  config => {
    const newConfig = config;
    let rule = newConfig.module.rules.find(rule => rule.oneOf);
    const paletteLess = fs.readFileSync("./src/styles/variables.less", "utf8");
    const variables = lessToJs(paletteLess);

    // 生成 color less
    generatorColorLess();

    // 生成 initialValue
    const colorLessBase = fs.readFileSync(
      "./node_modules/antd/lib/style/color/colors.less",
      "utf8"
    );
    const colorBase = lessToJs(colorLessBase);
    const themesLessBase = fs.readFileSync(
      "./node_modules/antd/lib/style/themes/default.less",
      "utf8"
    );
    const themesBase = lessToJs(themesLessBase);
    let baseLess = { ...colorBase, ...themesBase, ...variables };
    fs.writeFileSync(
      path.join(__dirname, "./src/initialValue.js"),
      `export default ${JSON.stringify(baseLess)};`
    );

    const options = {
      antDir: path.join(__dirname, "./node_modules/antd"),
      stylesDir: path.join(__dirname, "./src/styles"),
      varFile: path.join(__dirname, "./src/styles/variables.less"),
      mainLessFile: path.join(__dirname, "./src/styles/index.less"),
      themeVariables: Object.keys(baseLess),
      indexFileName: "index.html",
      generateOnce: false
    };

    const themePlugin = new AntDesignThemePlugin(options);

    rule.oneOf.unshift({
      test: /\.less$/,
      use: [
        {
          loader: "style-loader"
        },
        {
          loader: "css-loader"
        },
        {
          loader: "less-loader",
          options: {
            javascriptEnabled: true,
            modifyVars: variables
          }
        }
      ]
    });
    config.plugins.push(themePlugin);

    return newConfig;
  }
];
