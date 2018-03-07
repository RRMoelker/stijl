var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var concatcss = require('gulp-concat-css');
var foreach = require('gulp-foreach');
var path = require('path');
var replace = require('gulp-replace-path');



gulp.task('copy-amsterdam-source', function() {
   return gulp
       .src('node_modules/gemeente-amsterdam-patterns/source/**/*.*')
       .pipe(gulp.dest('raw-source'))
});

gulp.task('build-css', function() {
  return gulp
    .src('src/css/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/']
    }))
    .pipe(concatcss('ams-stijl.css'))
    .pipe(replace('"/images/', '"../images/'))
    .pipe(gulp.dest('css'))
});

gulp.task('build-sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(foreach(function (stream, file) {
        var filename = path.parse(file.path).base;
        return stream
            .pipe(replace('../../node_modules/gemeente-amsterdam-patterns/source', '../raw-source'))
            .pipe(gulp.dest('scss'))
    }))
});

gulp.task('build-images', function() {
  return gulp
    .src('raw-source/images/**/*.*')
    .pipe(gulp.dest('images'))
});

gulp.task('clean', function(){
  return del('tmp/**', {force:true});
});

gulp.task('default', gulp.series('copy-amsterdam-source', 'build-css', 'build-sass', 'build-images'));
