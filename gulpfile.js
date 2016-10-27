var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['dev']);

gulp.task('dev', ['build', 'browser-sync', 'watch']);
gulp.task('prod', ['clean'], function() {
	gulp.run('build');
});

gulp.task('build-dev', ['html', 'css-dev', 'scripts', 'assets']);
gulp.task('build-prod', ['html', 'css-prod', 'scripts', 'assets']);
	
gulp.task('css-dev', function () {
	return gulp.src('./src/styles/*.css')
		.pipe(concat('styles.css'))
		.pipe(autoprefixer({
			browser: ['last 2 versions']
		}))
		.pipe(gulp.dest('./build/styles/'));
});

gulp.task('css-prod', function () {
	return gulp.src('./src/styles/*.css')
		.pipe(concat('styles.css'))
		.pipe(cssnano())
		.pipe(autoprefixer({
			browser: ['last 2 versions']
		}))
		.pipe(gulp.dest('./build/styles/'));
});

gulp.task('html', function () {
	return gulp.src('./src/index.html')
		.pipe(gulp.dest('./build/'));
});

gulp.task('scripts', function () {
	return gulp.src('./src/scripts/**/*.js')
		.pipe(gulp.dest('./build/scripts/'));
});

gulp.task('browser-sync', function() {
	return browserSync.init({
		server: {
			baseDir: './build/'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch('./src/styles/*.css', ['css']);
	gulp.watch('./src/scripts/*.js', ['scripts']);
	gulp.watch('./src/index.html', ['html']);
	gulp.watch('./src/**/*.*', browserSync.reload);
});

gulp.task('clean', function() {
	return gulp.src('build/')
		.pipe(clean());
});

gulp.task('assets', function() {
	return gulp.src('./src/assets/**/*.*')
		.pipe(gulp.dest('./build/assets/'));
});