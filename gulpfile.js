var gulp = require('gulp');
var sass = require('gulp-sass');
var globsass = require('gulp-sass-glob');
var postcss = require('gulp-postcss');

gulp.task('default', ['clean', 'build-css']);


gulp.task('build-css', function() {
  return gulp
    .src('styles/**/*.scss')
    .pipe(sass({
      includePaths: ['node_modules/']
    }))
    .pipe(globsass())
    .pipe(postcss())
    .pipe(gulp.dest('compiled/css'))
});

gulp.task('clean', function(){
  return del('tmp/**', {force:true});
});