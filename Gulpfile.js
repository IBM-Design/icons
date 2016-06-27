var del = require("del"),
    gulp = require("gulp"),
    runSequence = require("run-sequence"),
    shell = require("gulp-shell"),
    svgmin = require("gulp-svgmin"),
    path = require("path"),
    sketch = require('gulp-sketch');

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

gulp.task("svgmin", () => {
    return gulp.src("dist/**/*.svg")
    .pipe(svgmin({
        plugins: [
        {cleanupAttrs: true},
        {removeEditorsNSData: true},
        {removeEmptyAttrs: true},
        {removeDimensions: true},
        {removeComments: true},
        {removeDoctype: true},
        {removeRasterImages: true},
        {removeUnusedNS: true},
        {removeAttrs:
            { attrs: [
                'path:fill',
                'path:fill-rule',
                ]
            }
        },
        {removeUselessStrokeAndFill: true},
        {removeViewBox: false},
        ]
    })).pipe(gulp.dest("dist"));
});

gulp.task('sketch', function(){
  return gulp.src('./src/**/*.sketch')
    .pipe(sketch({
      export: 'artboards',
      formats: 'svg',
      compact: 'true'
    }))
    .pipe(gulp.dest('./dist/svg/'));
});

gulp.task("sketchSVG", done => {
    runSequence("sketch", "svgmin", done);
});

gulp.task("default", done => {
    runSequence("clean", "export", "svgmin", done);
});
