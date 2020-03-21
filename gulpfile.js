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
        https: false,
        port: 8001,
        scrollProportionally: false,
        directory: true
    });
};

function sassCompile() {
    return gulp.src('./assets/sass/custom.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
};

function watch() {
    gulp.watch("./assets/sass/custom.scss").on('change', sassCompile, browserSync.reload);
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./assets/css/*.css").on('change', browserSync.reload);
    gulp.watch("./assets/vue/components/*.js").on('change', browserSync.reload);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
};

function log() {
    console.log("tasks queue ready !");
};

module.exports = {
    default: gulp.parallel(server, watch, log)
};
