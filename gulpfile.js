var gulp = require('gulp'),
  mocha = require('gulp-mocha');

gulp.task('test', function () {
  return gulp.src(['spec/*-test.js'], {read: false})
    .pipe(mocha({
      reporter: 'spec',
      globals: {
        should: require('should')
      }
    }));
});

gulp.task('watch-and-test', function () {
  gulp.watch('**/*.js', ['test']);
});

gulp.task('watch', ['test', 'watch-and-test']);

gulp.task('default', ['test']);