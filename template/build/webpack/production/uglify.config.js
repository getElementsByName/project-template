const webpack = require("webpack");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin'); //https://github.com/webpack-contrib/uglifyjs-webpack-plugin

module.exports = {
	optimization: {
		minimizer: [new UglifyJSPlugin({
			sourceMap: true,
			uglifyOptions: {
				ie8: true,
				warnings: true, // dev terminal console
				compress: {
					drop_console: true, // drop console.* calls
					unused: true, // drop unref'd vars/funcs
					dead_code: true, // drop unreachable code
				},
			},
		})]
	}
};
