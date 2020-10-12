const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass');

// gulp version 3 starts
// compile sass files to css files
// gulp.task('sass', () => { return gulp.src('src/scss/*.scss')
// .pipe(sass())
// .pipe(gulp.dest('src/css'))
// .pipe(browserSync.stream());
// })
// create a server and watching files
// gulp.task('serve',['sass'], () => {
//     browserSync.init({
//         server: './src'
//     });
//     gulp.watch('src/scss/*.scss',['sass']);
//     gulp.watch('src/*.html').on('change',browserSync.reload);
// })

// gulp.task('default', ['serve']);

// gulp version 4 starts
function style() {
    return gulp.src('src/scss/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/css'))
    .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './src'
        }
    });
    gulp.watch('src/scss/*.scss', style);
    gulp.watch('src/*.html').on('change',browserSync.reload);
}

exports.style = style;
exports.watch = watch;
