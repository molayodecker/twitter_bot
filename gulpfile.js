var gulp = require('gulp');
var jslint = require('gulp-jslint');

gulp.task('jslint', function(){
  	return gulp.src(['./src/*.js'])
  	.pipe(jslint(
      {
      	/**set JSlint options **/
      	browser: true,
      	todo:    true,
      	devel:   true,
      	white:   true,
      	reporter:'default',
      	errorsOnly: false
      }
  	))
  	.on('error', function(error){
  		console.error(String(error));
  	});
});

gulp.task('default',['jslint'],function(){

});