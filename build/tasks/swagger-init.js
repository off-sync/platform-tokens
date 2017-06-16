var gulp = require('gulp');
var exec = require('child_process').exec;

gulp.task('swagger-init', function(cb){
    exec('swagger init spec \
        --title "Off-Sync.com Platform Tokens API" \
        --version 0.1.0 \
        --scheme http \
        --consumes application/com.off-sync.platform.tokens.v1+json \
        --produces application/com.off-sync.platform.tokens.v1+json',
        function(err, stdout, stderr) {
            console.log(stdout);
            console.log(stderr);
            cb(err);
        });
});