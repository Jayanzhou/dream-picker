/**
 * Created by jay on 17-8-29.
 */
var gulp = require('gulp'),
    less = require('gulp-less'),
    cssmin = require('gulp-minify-css'),
    sourcemaps = require('gulp-sourcemaps');

gulp.task('testLess', function () {
    gulp.src(['public/less/**/*.less', '!public/less/{reset,variable}.less'])
        .pipe(sourcemaps.init())
        .pipe(less())
        .pipe(gulp.dest('public/css/'))
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css-build/'));
});

gulp.task('lessWatch', function () {
    gulp.watch('public/less/**/*.less', ['testLess']);
});