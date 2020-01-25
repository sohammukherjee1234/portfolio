const gulp = require('gulp');
const sass = require('gulp-sass');
const uglify = require('gulp-uglify');
const autoPrefixer = require('gulp-autoprefixer');
const cleanCss = require('gulp-clean-css');
const concat = require('gulp-concat');
const watch = require('gulp-watch');
const htmlMinifier = require('gulp-htmlmin');
const del = require('del');
const path = require('path');

gulp.task('css', function(){
	return gulp.src(path.join('src', 'scss', '*.scss'))
			.pipe(sass())
			.pipe(autoPrefixer({cascade: false}))
			.pipe(cleanCss())
			.pipe(concat('style.css'))
			.pipe(uglify())
			.pipe(gulp.dest('dist'));
});

gulp.task('html', function(){
	return gulp.src(path.join('src', '*html'))
			.pipe(htmlMinifier({collapseWhitespace: true}))
			.pipe(dest('dist'));
});

gulp.task('clean-css', function(){
	return del(path.join('dist', '*.css'));
});

gulp.task('clean-html', function(){
	return del(path.join('dist', '*.html'));
});





gulp.task('watch-tasks', function(){
	gulp.watch(path.join('src', 'scss', '*.scss'), ['clean-css', 'css']);
	gulp.watch(path.join('src', '*html'), ['clean-html', 'html']);
});

gulp.task('default', ['watch']);







