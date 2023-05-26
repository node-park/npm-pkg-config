const pkg = require("../package.json");

console.log("输出 PKG CONFIG 注入的环境变量");

Object.keys(pkg.config).forEach((key) => {
  console.log(`${key}:`, process.env[`npm_package_config_${key}`]);
});
