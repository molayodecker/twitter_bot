var gulp = require('gulp');
var jslint = require('gulp-jslint');
var twit = require('twit');


gulp.task('twit', function(){
    gulp.src('./src/*.js')
    .pipe(twit(
    {
      consumer_key:         'b31sQp67Gkfwd7Bt068NVztGV',
      consumer_secret:      'wdRx4PvlkSdYBtdfGqegRluKCjE9TksbBEYmjkz8Ye8xP3IO72',
      access_token:         'b31sQp67Gkfwd7Bt068NVztGV',
      access_token_secret:  'wdRx4PvlkSdYBtdfGqegRluKCjE9TksbBEYmjkz8Ye8xP3IO72',
      timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests. 
    }
    ))
    .pipe(gulp.dest('.'))
});

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

gulp.task('default',['jslint', 'twit'],function(){

});