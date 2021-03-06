module.exports = function (grunt) {
	grunt.initConfig({
		browserify: {
			watchMain: {
				options: {
					browserifyOptions: {
						debug: true,
					},
					transform: [
						['babelify', { presets: ['es2015', 'react'] }]
					],
					watch: true,
					keepAlive: true,
				},
				files: {
					'build/js/main.js': 'src/js/main.js',
				},
			},
			main: {
				options: {
					browserifyOptions: {
						debug: true,
					},
					transform: [
						['babelify', { presets: ['es2015', 'react'] }]
					],
				},
				files: {
					'build/js/main.js': 'src/js/main.js',
				},
			},
		},
		copy: {
			main: {
				files: [{
					expand: true,
					cwd: 'node_modules/react-notifications/lib/fonts',
					src: ['**'],
					dest: 'build/css/fonts'
				}]
			},
			assets: {
				files: [
					{ expand: false, filter: 'isFile', src: ['./src/www/index.html'], dest: './build/index.html' },
					{ expand: true, filter: 'isFile', cwd: './src/css/', src: '**', dest: './build/css/' },
					{ expand: false, filter: 'isFile', src: ['./node_modules/react-notifications/lib/notifications.css'], dest: './build/css/notifications.css' },
					{ expand: false, filter: 'isFile', src: ['./node_modules/leaflet/dist/leaflet.css'], dest: './build/css/leaflet.css' },
				],
			},
		},
	})

	require('load-grunt-tasks')(grunt)

	grunt.registerTask('default', ['watch'])
	grunt.registerTask('watch', ['browserify:watchMain'])
	grunt.registerTask('build', ['copy:assets', 'browserify:main', 'copy:main'])
}
