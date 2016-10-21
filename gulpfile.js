var gulp = require('gulp');
var rename = require ('gulp-rename');
var postcss = require('gulp-postcss');
var assets = require ('postcss-assets');
var short = require('postcss-short');

gulp.task('css', function () {
    var processors = [
		short,
		assets ({
			loadPaths: ['assets/img/'],
			relativTo: '/styles/'
		}),
  ];
    return gulp.src('./styles/styles.css')
        .pipe(postcss(processors))
		.pipe(rename('styleOut.css'))
        .pipe(gulp.dest('./build/styles/'));
});

gulp.task ('default', function() {
		gulp.watch('styles/*.css',['css'])
})