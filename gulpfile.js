const {src, dest, series} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const cleancss = require('gulp-clean-css');

async function scss() {
    src('scss/**/*.scss')
        .pipe(sass())
        .pipe(concat('style.css'))
        .pipe(cleancss())
        .pipe(dest('dist'))
}

async function js() {
    src('js/**/*.js')
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.build = series(js,scss)