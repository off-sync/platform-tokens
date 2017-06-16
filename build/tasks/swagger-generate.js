var gulp = require('gulp');
var exec = require('child_process').exec;
var clean = require('gulp-clean');
 
gulp.task('swagger-clean', function () {
    return gulp.src('server-gen', {read: false})
        .pipe(clean());
});

gulp.task('swagger-generate-server', function(cb){
    exec('swagger generate server \
        -t server-gen',
        function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
});

gulp.task(
    'swagger-generate', 
    ['swagger-generate-server'], 
    function(){});
