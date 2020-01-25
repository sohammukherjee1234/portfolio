var gulp = require('gulp');
var sass = require('gulp-sass');
var minify = require('gulp-uglify');
var concat = require('gulp-concat');
watch = require('gulp-watch');
var browserSync = require('browser-sync').create();
gulp.task('hello',function(){
   return console.log('GULP says Hi!');
});
gulp.task('copy-files',function(){
    return gulp.src('src/html/*.html')
    .pipe(gulp.dest('dest/html'));
});
gulp.task('sass',function(){
    return gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('dest/css'));
});
gulp.task('minify-js',function(){
    return gulp.src('src/javascript/*.js')
    .pipe(minify())
    .pipe(gulp.dest('dest/javascript'));
});
gulp.task('concat-js',function(){
    return gulp.src('src/javascript/*.js')
    .pipe(concat('app.js'))
    .pipe(minify())
    .pipe(gulp.dest('dest/javascript'));
});
gulp.task('concat-css',function(){
    return gulp.src('src/css/*.scss')
    .pipe(sass())
    .pipe(concat('style.css'))
    .pipe(gulp.dest('dest/css'));
});
gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        },
        port: 8080,
        open: true,
        notify: false
    });
});
gulp.task('default',function(){
    gulp.watch('src/html/*.html',gulp.parallel('copy-files'));
    gulp.watch('src/javascript/*.js',gulp.parallel('concat-js'));
    gulp.watch('src/css/*.scss',gulp.parallel('concat-css'));
    //gulp.watch('dest',gulp.series('browser-sync'));
});
//gulp.task('default',['watch']);
