var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['clean'], function() {
	gulp.run('develop');
}); 
gulp.task('develop', ['css', 'watch', 'browser-sync', 'assets']); 

gulp.task('css', function () {
	return gulp.src('styles/*.css')
		.pipe(concat('styles.css'))
		.pipe(cssnano())
		.pipe(autoprefixer({
			browser: ['last 2 versions']
		}))
		.pipe(gulp.dest('build/'));
});

gulp.task('browser-sync', function() {
	return browserSync.init({
		server: {
			baseDir: './build/'
		}
	});
});

gulp.task('watch', function() {
	gulp.watch('*.css', ['css']);
	gulp.watch('js/*.js', ['scripts']);
});

gulp.task('clean', function() {
	return gulp.src('build/')
		.pipe(clean());
})

gulp.task('assets', function() {
	return gulp.src('**/*.*')
		.pipe(gulp.dest('build/'));
});