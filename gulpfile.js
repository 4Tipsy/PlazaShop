const gulp = require("gulp")
const include = require("gulp-file-include")
const sass = require("gulp-sass")(require("sass"))
const csso = require('gulp-csso')
const babel = require('gulp-babel')
const minify = require("gulp-babel-minify")
const del = require("del")




/* функции сборщика */
// отчищает корневой каталог проекта
gulp.task("clear", function () {
  return del("prod/**")
})


// копирует необходимые файлы проекта(фотки и т.п.)
gulp.task("copyRes", gulp.parallel(
  function () {
    return gulp.src("dev/public/res/**")
      .pipe(gulp.dest("prod/public/res"))
  },
  function () {
    return gulp.src("dev/public/img/**")
      .pipe(gulp.dest("prod/public/img"))
  }
))

// собирает html файлы
gulp.task("buildHtml", function () {
  return gulp.src("dev/public/*.html")
    .pipe(include({
      prefix: "@@"
    }))
    .pipe(gulp.dest("prod/public"))
})


// собирает и минимизирует scss файлы
gulp.task("buildCss",
  function () {
    return gulp.src("dev/public/css/*.scss")
      .pipe(sass())
      .pipe(csso())
      .pipe(gulp.dest("prod/public/css"))
})

// собирает и минимизирует jsx файлы
gulp.task("buildJsx", function () {
  return gulp.src("dev/public/js/*.jsx")
    .pipe(babel({
    plugins: ['transform-react-jsx']
    }))
    .pipe(minify())
    .pipe(gulp.dest("prod/public/js"))
})

// собирает и минимизирует js файлы
gulp.task("buildJs", function () {
  return gulp.src("dev/public/js/*.js")
    .pipe(minify())
    .pipe(gulp.dest("prod/public/js"))
})


// собирает весь проект
gulp.task("build", gulp.series("clear", "copyRes", "buildHtml", "buildCss", "buildJs", "buildJsx"))
