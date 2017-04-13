var gulp = require('gulp');
var uglify = require('gulp-uglify');
var cssnano = require('gulp-cssnano');
var del = require('del');
var runSequence = require('run-sequence');
var rename = require('gulp-rename');

gulp.task('default', function(callback) {
    runSequence('clean', ['minifyJS', 'minifyCSS'], callback)
});

gulp.task('clean', function() {
    del.sync('min');
});

gulp.task('minifyJS', function() {
    return gulp.src('clickRipple.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('min'));
});

gulp.task('minifyCSS', function() {
    return gulp.src('clickRipple.css')
        .pipe(cssnano())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('min'));
});
