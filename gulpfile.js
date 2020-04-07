const gulp = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass');
const browserSync = require('browser-sync').create();
const imagemin = require('gulp-imagemin');

function imgCompressor() {
    return gulp .src("./assets/img/*")
    .pipe(imagemin([
        //imagemin.gifsicle({interlaced: true}),
        imagemin.mozjpeg({quality: 75, progressive: true}),
        imagemin.optipng({optimizationLevel: 3})
    ]))
    .pipe(gulp.dest("./assets/img-compressed"));
}

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
    gulp.watch("./src/js/components/*.js").on('change', browserSync.reload);
    gulp.watch("./src/js/*.js").on('change', browserSync.reload);
};

function log() {
    console.log("--Watch function is ready. Gang !");
};

module.exports = {
    default: gulp.parallel(server, watch, imgCompressor, log)
};