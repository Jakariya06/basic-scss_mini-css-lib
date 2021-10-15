const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass') (require('sass'))

function createStyles() {
    return src('itachi/**/*.scss')
     .pipe(sass())
     .pipe(dest('css'))
}

function watchTask() {
    watch(['itachi/**/*.scss'], createStyles)
}

exports.default = series(createStyles, watchTask)