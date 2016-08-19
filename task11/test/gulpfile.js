var gulp = require('gulp'),
	rev = require('gulp-rev'),
	cssminify = require('gulp-minify-css'),
	runSequence = require('gulp-sequence'),
	revcollector = require('gulp-rev-collector');

gulp.task('css',function(){
	gulp.src('css.css')
		.pipe(cssminify())
		.pipe(rev())
		.pipe(gulp.dest('./dist'))
		.pipe(rev.manifest())
		.pipe(gulp.dest('./rev'));
});
gulp.task('version',function(){
	gulp.src(['./rev/*.json','./index.html'])
		.pipe(revcollector({
			replaceReved: true
		}))
		.pipe(gulp.dest('./'));
});

gulp.task('default',['css','version']);

/*gulp.task('default',function(cb){
	runSequence('css','version',cb);
	// gulp.start('css','version');
})*/