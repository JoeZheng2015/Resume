var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('concat', function() {
	gulp.src(['./css/mobile.css', './css/animate.css', './css/icons.css'])
		.pipe($.concat('mobile.min.css'))
		.pipe($.minifyCss())
		.pipe($.rev())
		.pipe(gulp.dest('./css'))
		.pipe($.rev.manifest())
		.pipe(gulp.dest('./rev'));
});

gulp.task('rev', ['concat'], function() {
	gulp.src(['./rev/*.json', './*.html'])
		.pipe($.revCollector())
		.pipe(gulp.dest('./build/'))
});

gulp.task('mobile', ['rev']);