const path = require('path')

module.exports = {  
	entry: 'src/app.js',

	output: {  
    	path: path.resolve(__dirname, './'),  
    	filename: 'testeandomain.js'  
	},

	// module: {  
	// 	rules: [
	// 		{  
	// 		  test: /\.scss$/,
	// 		  exclude: /node_modules/,  
	// 		  use: ['sass-loader']  
	// 		}
	// 	]  
	// }
}