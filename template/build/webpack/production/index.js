/**
 * webpack 최종 빌드 설정
 */

const merge = require("webpack-merge");
const UglifyConfig = require("./uglify.config");
const SourceMapConfig = require("./sourceMap.config");

module.exports = merge(SourceMapConfig, UglifyConfig);
