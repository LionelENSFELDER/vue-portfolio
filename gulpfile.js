const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();

function server() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html',
        },
        host: 'aboutme',
        https: false,
        port: 8001,
        scrollProportionally: false,
        directory: true
    });
};

function sassCompile() {
    return gulp.src('./src/sass/custom.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
};

function watch() {
    gulp.watch("./src/sass/custom.scss").on('change', sassCompile, browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./src/css/*.css").on('change', browserSync.reload);
    gulp.watch("./src/js/components/*.vue").on('change', browserSync.reload);
    gulp.watch("./src/js/*.js").on('change', browserSync.reload);
};

function log() {
    console.log("tasks queue ready !");
};

module.exports = {
    default: gulp.parallel(server, watch, log)
};