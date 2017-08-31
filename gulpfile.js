var gulp = require('gulp');
var pug = require('gulp-pug');
var watch = require('gulp-watch');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

var buildPage = function () {
  return gulp.src(['public/*.pug'])
    .pipe(pug({pretty:true}))
    .pipe(gulp.dest('pug-to-html'))
}
gulp.task('build', buildPage)

gulp.task('watch', function () {
  return watch('public/**/*.pug', buildPage)
});

gulp.task('sass', function () {
  return gulp.src('./public/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});