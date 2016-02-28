var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('mobilecss', function() {
	gulp.src(['./css/icons.css', './css/mobile.css', './css/animate.css'])
		.pipe($.concat('mobile.min.css'))
		.pipe($.autoprefixer({
			browser: ['last 2 versions'],
			cascade: false
		}))
		.pipe($.minifyCss())
		.pipe(gulp.dest('./css'))
});
gulp.task('mobilejs', function() {
	gulp.src(['./js/FullPage.js', './js/mobile.js'])
		.pipe($.concat('mobile.min.js'))
		.pipe($.uglify())
		.pipe(gulp.dest('./js'))
});
gulp.task('mobile', ['mobilecss', 'mobilejs']);

gulp.task('pccss', function() {
	gulp.src(['./css/icons.css', './css/index.css', './css/shake.css'])
		.pipe($.concat('index.min.css'))
		.pipe($.autoprefixer({
			browser: ['last 2 versions'],
			cascade: false
		}))
		.pipe($.minifyCss())
		.pipe(gulp.dest('./css'))
});
gulp.task('pc', ['pccss']);