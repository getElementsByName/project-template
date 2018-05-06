module.exports = {
	devtool: "cheap-module-source-map",
	output: {
		devtoolModuleFilenameTemplate: info =>
			'file://' + path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
	},
};
