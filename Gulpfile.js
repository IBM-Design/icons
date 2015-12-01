var del = require("del"),
    gulp = require("gulp"),
    shell = require("gulp-shell"),
    path = require("path");

gulp.task("clean", () => {
    return del([
        "dist/**/*"
    ]);
});

gulp.task("export", ["clean"], shell.task([
    "osascript lib/export.scpt "
        + path.resolve(__dirname, "lib/IllustratorSaveAsSvgs.jsx") + " "
        + path.resolve(__dirname, "dist") + " "
        + path.resolve(__dirname, "src") + " "
]));

gulp.task("default", ["clean", "export"]);


