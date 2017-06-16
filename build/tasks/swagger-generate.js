var SWAGGER_SERVER_GEN_PATH = 'server';

var gulp = require('gulp');
var exec = require('child_process').exec;
var clean = require('gulp-clean');
var gulpSequence = require('gulp-sequence');

gulp.task('swagger-server-clean', function () {
    return gulp.src(SWAGGER_SERVER_GEN_PATH, { read: false })
        .pipe(clean());
});

gulp.task('swagger-server-generate', function (cb) {
    exec('swagger generate server \
        -t ' + SWAGGER_SERVER_GEN_PATH,
        function (err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
});

gulp.task('swagger-server-config', function () {
    return gulp
        .src('config/server/*')
        .pipe(gulp.dest(SWAGGER_SERVER_GEN_PATH + '/restapi/'));
});

gulp.task(
    'swagger-generate',
    gulpSequence('swagger-server-clean', 'swagger-server-generate', 'swagger-server-config'));
