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
			.pipe(gulp.dest('docs'));
});

gulp.task('html', function(){
	return gulp.src(path.join('src', '*.html'))
			.pipe(htmlMinifier({collapseWhitespace: true}))
			.pipe(gulp.dest('docs'));
});

gulp.task('images', function(){
	return gulp.src(path.join('src', 'images', '*'))
			.pipe(gulp.dest(path.join('docs', 'images')));
})

gulp.task('clean-css', function(){
	return del(path.join('docs', '*.css'));
});

gulp.task('clean-html', function(){
	return del(path.join('docs', '*.html'));
});


gulp.task('clear', function(){
	return del('docs');
});

gulp.task('clean-js', function(){
	return del(path.join('docs', '*.js'));
});

gulp.task('js', function(){
	return gulp.src(path.join('src', 'js', '*.js'))
				.pipe(concat('all.js'))
				.pipe(uglify())
				.pipe(gulp.dest('docs'));
})


gulp.task('watch-tasks', function(){
	gulp.watch(path.join('src', 'scss', '*.scss'), gulp.series('clean-css', 'css'));
	gulp.watch(path.join('src', '*html'), gulp.series('clean-html', 'html'));
	gulp.watch(path.join('src', 'js', '*.js'), gulp.series('clean-js', 'js'));
	
});

gulp.task('default', gulp.series('clear', gulp.parallel('css', 'html', 'js', 'images'), 'watch-tasks'));







