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
        .pipe(cssmin())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('public/css/'));
});

gulp.task('lessWatch', function () {
    gulp.watch('public/less/**/*.less', ['testLess']); //当所有less文件发生改变时，调用testLess任务
});