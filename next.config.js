const Images = require("next-images");
module.exports = Images({
	fileExtensions: ["jpg", "jpeg", "png", "svg", "gif"],
	webpack(config, options) {
		return config;
	},
});
