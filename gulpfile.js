
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./",
            index: 'index.html',
        },
        https: false,
        port: 12,
        scrollProportionally: false,
        directory: true
    });
});

gulp.task('watch', function() {
    gulp.watch("./*.html").on('change', browserSync.reload);
    gulp.watch("./assets/css/*.css").on('change', browserSync.reload);
    gulp.watch("./assets/js/*.js").on('change', browserSync.reload);
});

gulp.task('server', gulp.parallel('browser-sync', 'watch', function() { 
    
}));