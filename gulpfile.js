var gulp = require('gulp');
var sass = require('gulp-sass');
var concatcss = require('gulp-concat-css');
var del = require('del');


gulp.task('build-css', function() {
  return gulp
    .src('src/css/**/*.scss')
    .pipe(sass())
    .pipe(concatcss('ams-stijl.css'))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('build-sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(gulp.dest('dist/scss'))
});

gulp.task('build-images', function() {
    return gulp
    .src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('build-fonts', function() {
    return gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', function(){
    return del('dist');
});

gulp.task('default', gulp.series('clean', 'build-fonts', 'build-css', 'build-sass', 'build-images'));
