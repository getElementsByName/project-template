/**
 * webpack 공통 설정
 */

const merge = require("webpack-merge");
const WebpackHtmlConfig = require("./html.config");
const TypescriptConfig = require("./typescript.config");

module.exports = merge(WebpackHtmlConfig, TypescriptConfig);
