var gulp = require('gulp');
var	concat = require('gulp-concat');
var cssnano = require('gulp-cssnano');
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');

gulp.task('default', ['clean'], function() {
	gulp.run('develop');
}); 

gulp.task('develop', ['css', 'useref', 'scripts', 'watch', 'browser-sync', 'assets']);  
	

//Объединение css файло//
gulp.task('css', function () {
	gulp.src('styles/*.css')
		.pipe(concat('styles.css'))
		.pipe(cssnano())
		.pipe(autoprefixer({
			browser: ['last 2 versions']
		}))
		.pipe(gulp.dest('build/'));
});
//Объединение js файлов в один
 gulp.task('useref', function() {
	return gulp.src('index.html')
		.pipe(useref()) 
		.pipe(gulp.dest('build/'))
		.on('end', function() { 
		gulp.run('scripts');
		});
});
//Минификация скриптов//
 gulp.task('scripts', function() {
	gulp.src('build/*.js')
		.pipe(uglify()) 
		.pipe(gulp.dest('build/'));
});
//Запуск сервера.
gulp.task('browser-sync', function() {
	return browserSync.init({
		server: {
			baseDir: './build/'
		}
	});
});
// Установление слежки
gulp.task('watch', function() {
	gulp.watch('*.css', ['css']);
	gulp.watch('js/*.js', ['scripts']);

});

//Задача для удаление папки build.
gulp.task('clean', function() {
	return gulp.src('build/')
		.pipe(clean());
})
//Перемещение локальных файлов в папку build
gulp.task('assets', function() {
	return gulp.src('**/*.*')
		.pipe(gulp.dest('build/'));
});