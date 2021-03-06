var webpack = require('webpack');

module.exports = {
	entry: [
		'script!jquery/dist/jquery.min.js',
		'script!foundation-sites/dist/foundation.min.js',
		'./app/app.js'
	],
	externals: {
		jquery: 'jQuery'
	},
	output: {
		path: 'public',
		filename: 'bundle.js'
	},
	devServer: {
		inline: true,
		contentBase: './public',
		port: 3000
	},
	devtool: 'cheap-module-eval-source-map',
  resolve: {
     root: __dirname,
     alias: {
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      Weather: 'app/components/Weather.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherMessage: 'app/components/WeatherMessage.js',
      About: 'app/components/About.js',
      Examples: 'app/components/Examples.js',
			openWeatherMap: 'app/api/openWeatherMap.js',
			ErrorModal: 'app/components/ErrorModal.js',
			applicationStyles: 'app/styles/app.scss'
    }
  },
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				loader: ['babel-loader'],
				query: {
					presets: ['es2015', 'react', 'stage-0']
				}
			}
			// {
			// 	test: /\.json$/,
			// 	exclude: /(node_modules)/,
			// 	loader: 'json-loader'
			// },
			// {
			// 	test: /\.css$/,
			// 	loader: 'style-loader!css-loader!autoprefixer-loader'
			// },
			// {
			// 	test: /\.scss$/,
			// 	loader: 'style-loader!css-loader!autoprefixer-loader!sass-loader'
			// }
		]
	},
	plugins: [
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     }
        // }),
				new webpack.ProvidePlugin({
					'$': 'jquery',
					'jQuery': 'jquery'
				})
    ]
}
