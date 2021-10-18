'use strict';

module.exports = function (gulp, options, plugins) {

	return function (cb) {
		gulp.src(options.path.src.pug)
			.pipe(plugins.plumber())
			.pipe(plugins.pug({
				pretty: true
			}))
			.pipe(plugins.plumber.stop())
			.pipe(gulp.dest(options.path.build.html))
			.on('end', plugins.browserSync.reload);
		cb();
	};
};

