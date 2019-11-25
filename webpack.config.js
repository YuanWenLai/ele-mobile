// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {  // module.exports commonjs规范
	entry: path.join(__dirname, '/src/main.js'), // 项目入口文件，webpack将从main.js开始，把所有依赖的js都打包
	output: {
		path: path.resolve(__dirname, './dist'), // 项目的打包后的输出路径 可修改
		publicPath: '/dist/', // 通过devServer访问路径 可修改
		filename: 'build.js' // 打包后的文件名 可修改
	},
	devServer: {
		historyApiFallback: true, // When using the HTML5 History API, the `index.html` page will likely have to be served in place of any `404` responses
		overlay: true //Shows a full-screen overlay in the browser when there are compiler errors or warnings. Disabled by default. If you want to show only compiler errors
	},
	resolve: {
		alias: {
			'vue$': 'vue/dist/vue.esm.js'
		}
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					'css-loader'
				]
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader'
				],
			},
			{ // 添加解析js的loader
				test: /\.js$/,
				loader: 'babel-loader',
				exclude: /node_modules/
			}
		]
	}
};
