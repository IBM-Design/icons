var del = require("del"),
    gulp = require("gulp"),
    runSequence = require("run-sequence"),
    shell = require("gulp-shell"),
    svgmin = require("gulp-svgmin"),
    path = require("path"),
    zip = require('gulp-zip'),
    merge = require('merge-stream'),
    foreach = require('gulp-foreach'),
    flatten = require('gulp-flatten');

gulp.task("clean", () => {
    return del([
        "dist/**/*"
    ]);
});

gulp.task("export", shell.task([
    "osascript lib/export.scpt "
        + path.resolve(__dirname, "lib/IllustratorSaveAsSvgs.jsx") + " "
        + path.resolve(__dirname, "dist") + " "
        + path.resolve(__dirname, "src") + " "
]));

gulp.task("svg", () => {
    return gulp.src("dist/**/*.svg")
        .pipe(svgmin())
        .pipe(gulp.dest("dist"));
});

// Icon Download Tasks
gulp.task('compile-zips-all', function() {
  return gulp.src(['./dist/**/!(*.json)', '!./dist/zips/'])
    .pipe(zip('ibm-design-icons.zip'))
    .pipe(gulp.dest('dist/zips/'))
});

gulp.task('compile-zips-individual', ['compile-zips-all'], function() {
  return merge(
    gulp.src('./dist/**/*_16.svg'),
    gulp.src('./dist/**/*_24.svg'),
    gulp.src('./dist/**/*_32.svg'),
    gulp.src('./dist/**/*_64.svg'),
    gulp.src('./dist/**/*_128.svg'),
    gulp.src('./dist/**/glyphs/*.svg')
  ).pipe(
    foreach(
      function(stream, file) {
        var iconName = function(iconPath) {
          var baseName = path.basename(iconPath);
          return baseName.substring(0,baseName.lastIndexOf('_'));
        }(file.path);
        return gulp.src(
          [
            './dist/**/' + iconName + '_*',
            '!./dist/zips/',
            './dist/LICENSE.md',
            './dist/README.md'
          ], {}
        )
        .pipe(flatten({newPath: './ibm-design-icons-' + iconName}))
        .pipe(zip('ibm-design-icons-' + iconName + '.zip'))
        .pipe(gulp.dest('dist/zips/'));
      }
    )
  );
});

gulp.task('zips', ['compile-zips-individual']);

gulp.task("default", done => {
    runSequence("clean", "export", "svg", "zips", done);
});
