var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');


gulp.task('build-css', function() {
  return gulp
    .src('src/css/ams-stijl.scss')
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(gulp.dest('dist/css'))
});

gulp.task('copy-sass', function() {
  return gulp
    .src('src/scss/**/*.scss')
    .pipe(gulp.dest('dist/scss'))
});

gulp.task('copy-images', function() {
    return gulp
    .src('src/images/**/*.*')
    .pipe(gulp.dest('dist/images'))
});

gulp.task('copy-fonts', function() {
    return gulp
    .src('src/fonts/**/*.*')
    .pipe(gulp.dest('dist/fonts'))
});

gulp.task('clean', function(){
    return del('dist');
});

gulp.task('default', gulp.series('clean', 'copy-fonts', 'build-css', 'copy-sass', 'copy-images'));
