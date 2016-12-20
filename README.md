# Book Site ![Книга](https://github.com/anyaVyacheslavovna/Images-/raw/master/1.gif) 
---

* View the books
* Evaluate books
* Post reviews


### Technologies 
---
* HTML
* CSS
* [Gulp](https://www.npmjs.com/package/gulp-download) 
* [PostCss](http://postcss.org/)
* [jQuery](http://jquery.com/)

### Autors

- Anna
- Aziz
- Vitya

$ gulp
```
# Install plugins for project
---
## Install with npm
```sh
$ npm i // install all plugins for work, which is situated in package json
```
```sh
var	concat = require('gulp-concat'); // Declaration of variables
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var clean = require('gulp-clean');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
	return.gulp.src('styles/*.css')
		.pipe(concat('styles.css')) //Concatenation of css files
		.pipe(cssnano()) //Minification of css
		.pipe(autoprefixer({ //Autoprefixer
			browser: ['last 2 versions']
		}))
		.pipe(gulp.dest('build/'));
});

gulp.task('browser-sync', function() { //Run server
	return browserSync.init({
		server: {
			baseDir: './build/'
		}
	});
});

gulp.task('clean', function() { //Delete folder 'build/'
	return gulp.src('build/')
		.pipe(clean());
})

gulp.task('assets', function() { //Move local files in folder 'build/'
	return gulp.src('**/*.*')
		.pipe(gulp.dest('build/'));
});

```

### You are ready for work !
# ![Веселые миньоны](https://github.com/anyaVyacheslavovna/Images-/raw/master/minons1.gif) 

# Gulp install
--- 
1. First of all install gulp globally:
```sh
$ npm install -g gulp
```
2.  Initialize your project directory:
```sh
$ npm init
```
3. Install gulp in your project devDependencies:
```sh
$ npm install --save-dev gulp
```
4. Create a gulpfile.js 
```sh
var gulp = require('gulp');

gulp.task('default', function() {
  // your code
});
```
5. Run gulp:
```sh
