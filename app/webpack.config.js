const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.join(__dirname, '/src/index.js'),
	output: {
		filename: 'build.js',
		path: path.join(__dirname, '/dist')
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader'
			},
			{
				test: /\.html$/,
				use: 'html-loader'
			},
			{
				test: /\.s[ac]ss$/,
				use: [ 'style-loader', 'css-loader', 'sass-loader']
			},
			{
				test: /\.(jpg|png)$/,
				use: 'file-loader'
			}
		]
	},
	resolve: {
		extensions: ['*', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
			filname: './index.html'
		})
	]
};