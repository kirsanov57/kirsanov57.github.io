const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
//guplconst imagemin = require("gulp-imagemin");
const htmlmin = require('gulp-htmlmin');


gulp.task('server', function() {

    browserSync({
        server: {
            baseDir: "./"
        }
    });

    gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('styles', function() {
    return gulp.src("./sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer())
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});

gulp.task('watch', function() {
    gulp.watch("./sass/**/*.+(scss|sass|css)", gulp.parallel('styles'));
    // gulp.watch("./*.html").on('change', gulp.parallel('html'));
});

// gulp.task('html', () => {
//     return gulp.src('./*.html')
//       .pipe(htmlmin({ collapseWhitespace: true }))
//       .pipe(gulp.dest('dist/'));
//   });

// gulp.task('scripts', () => {
//     return gulp.src('./js/**/*.js')
//       .pipe(gulp.dest('dist/js'));
// });

// gulp.task('fonts', () => {
//     return gulp.src('./fonts/**/*')
//       .pipe(gulp.dest('dist/fonts'));
// });

// gulp.task('icons', () => {
//     return gulp.src('./icons/**/*')
//       .pipe(gulp.dest('dist/icons'));
// });

// gulp.task('images', () => {
//     return gulp.src('./img/**/*')
//       //.pipe(imagemin())
//       .pipe(gulp.dest('dist/img'));
// });

gulp.task('default', gulp.parallel('watch', 'server', 'styles'));