const {src, dest, watch, series} = require('gulp')
const sass = require('gulp-sass') (require('sass'))
const purgecss = require('gulp-purgecss')

function createStyles() {
    return src('itachi/**/*.scss')
     .pipe(sass())
     .pipe(purgecss({ content : ['*.html']}))
     .pipe(dest('css'))
}

function watchTask() {
    watch(['itachi/**/*.scss', '*.html'], createStyles)
}

exports.default = series(createStyles, watchTask)