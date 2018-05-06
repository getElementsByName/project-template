/**
 * webpack 공통 설정
 */

const merge = require("webpack-merge");
const WebpackHtmlConfig = require("./html.config");

module.exports = merge(WebpackHtmlConfig);
