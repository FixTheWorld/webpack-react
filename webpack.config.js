module.exports={
	entry:'./assets/main.js',
	output:{
		path:'/build/',
		filename:"[name].bundle.js"
	},
	module:{
		loaders:[{test:/\.js$/,loader:'jsx-loader'},{test:/\.scss$/,loader:["style", "css", "sass"]}]
	},
	plugins:[]
}