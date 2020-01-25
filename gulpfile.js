var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
gulp.task('copy-files',function(){
	return gulp.src('src')
	.pipe(gulp.dest('dest'));
});
gulp.task('sass',function(){
	return gulp.src('src/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('dest'));
});
gulp.task('minify-js',function(){
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'));
});
gulp.task('minify-css',function(){
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'));
});
gulp.task('minify-css',function(){
	return gulp.src('src/*.js')
	.pipe(uglify())
	.pipe(gulp.dest('dest'));
});
