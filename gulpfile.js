// gulp file to maintain all tasks for me
var gulp = require("gulp"),
  concat = require("gulp-concat"),
  autoprefixer = require("gulp-autoprefixer"),
  pug = require("gulp-pug"),
  livereload = require("gulp-livereload"),
  sourcemaps = require("gulp-sourcemaps"),
  minify = require("gulp-minify");
const sass = require("gulp-sass")(require("sass"));

//html task >> take pug files and compile to html files to dist folder
gulp.task("html", async function () {
  return gulp
    .src("stage/html/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("dist"))
    .pipe(livereload());
});

//css task >> take css files or scss file comile and init sourcemap add prefixes and concat files then dest to dist folder
gulp.task("css", async function () {
  return gulp
    .src(["stage/css/**/*.css", "stage/css/**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
    .pipe(autoprefixer())
    .pipe(concat("main.css"))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist/css"))
    .pipe(livereload());
});

//js task >> concat js files to main and minify to dist

gulp.task("js", async function () {
  return gulp
    .src("stage/js/*.js")
    .pipe(concat("main.js"))
    .pipe(minify())
    .pipe(gulp.dest("dist/js"))
    .pipe(livereload());
});

//watch task >> watch all tasks and auto reaload
gulp.task("watch", async function () {
  require("./server.js");
  livereload.listen();
  gulp.watch("stage/html/**/*.pug", gulp.series("html"));
  gulp.watch("stage/css/**/*.*", gulp.series("css"));
  gulp.watch("stage/js/*.js", gulp.series("js"));
});
