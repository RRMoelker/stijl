var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var header = require('gulp-header');

var pkg = require('./package.json');
var banner = ['/**',
    ' * <%= pkg.name %> - <%= pkg.description %>',
    ' * @version v<%= pkg.version %>',
    ' */',
    ''].join('\n');

gulp.task('build-css', function() {
    return gulp
    .src(['src/css/ams-stijl.scss','src/css/ams-map.scss'])
    .pipe(sass())
    .pipe(postcss([autoprefixer()]))
    .pipe(header(banner, { pkg : pkg } ))
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

// test task, deploys the style to the amaps for test.
// expects the amaps project in the same folder as stijl
gulp.task('copy-test', function() {
    return gulp
    .src('dist/**/*.*')
    .pipe(gulp.dest('../amaps/test/dist'))
});

gulp.task('clean', function(){
    return del('dist');
});

gulp.task('default', gulp.series('clean', 'copy-fonts', 'build-css', 'copy-sass', 'copy-images'));
