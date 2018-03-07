var gulp = require('gulp');
var sass = require('gulp-sass');
var globsass = require('gulp-sass-glob');
var postcss = require('gulp-postcss');
var concatcss = require('gulp-concat-css');



gulp.task('build-css', function() {
  return gulp
    .src('src/css/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/']
    }))
    .pipe(concatcss('ams-stijl.css'))
    .pipe(gulp.dest('css'))
});

gulp.task('build-sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(gulp.dest('scss'))
});

gulp.task('build-images', function() {
  return gulp
    .src('node_modules/gemeente-amsterdam-patterns/source/images/**/*.*')
    .pipe(gulp.dest('images'))
});

gulp.task('clean', function(){
  return del('tmp/**', {force:true});
});

gulp.task('default', gulp.series('build-css', 'build-sass', 'build-images'));
