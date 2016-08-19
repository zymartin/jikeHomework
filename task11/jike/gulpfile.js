var gulp = require('gulp'),
    less = require('gulp-less'),
    cssminify = require('gulp-minify-css'),
    spriter = require('gulp-css-spriter'),
    uglify = require('gulp-uglify'),
    rev = require('gulp-rev'),
    revcollector = require('gulp-rev-collector'),
    clean = require('gulp-clean'),
    htmlmin = require('gulp-htmlmin'),
    imagemin = require('gulp-imagemin'),
    runSequence = require('gulp-sequence'),
    autoprefixer = require('gulp-autoprefixer');

var config = {
    less:{
        src:'app/less/indexless.less',
        dest:'temp/css'
    },
    css:{
        src:'app/css/*.css',
        dest:'temp/css'
    },
    img:{
        src:'app/img/**/*',
        dest:'temp/img'
    },
    js:{
        src:'app/js/*.js',
        dest:'temp/js/'
    }
};
//图片加戳
gulp.task('imagemin', function(){
    return gulp.src(config.img.src)
        //.pipe(imagemin())
        .pipe(rev())
        .pipe(gulp.dest(config.img.dest))
        .pipe(gulp.dest('build/img'))
        .pipe(rev.manifest({
            base: './',
            merge: true
        }))
        .pipe(gulp.dest('./'));
});
gulp.task('rev_img',['imagemin'],function(){
    return gulp.src(
        ['rev-manifest.json','temp/css/indexless.css']
    ).pipe(revcollector())
        .pipe(gulp.dest('temp/css/temp'))
});

gulp.task('css',function(){
    return gulp.src(config.less.src)
        .pipe(less())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(spriter(
            {
            // 生成的spriter的位置
            'spriteSheet': 'temp/img/dist/sprite.png',
            // 生成样式文件图片引用地址的路径
            // 如下将生产：backgound:url(../images/sprite20324232.png)
            'pathToSpriteSheetFromCSS': '../img/dist/sprite.png'
            }
        ))
        .pipe(gulp.dest('temp/css/dist'))
        .pipe(cssminify())
        .pipe(gulp.dest(config.less.dest))
});
gulp.task('js',function(){
    return gulp.src(config.js.src)
        .pipe(uglify())
        .pipe(gulp.dest(config.js.dest))
        .pipe(gulp.dest('build/js'))
});
gulp.task('html',function(){
    return gulp.src('app/*.html')
        .pipe(htmlmin())
        .pipe(gulp.dest('temp'));
});

gulp.task('clean', function() {
    return gulp.src(['temp/css','temp/js','temp/img','temp/*.html','build'], {
        read: false
    })
    .pipe(clean());
});

/*build文件夹*/

//加戳
gulp.task('moveDist',['css'],function(){
    return gulp.src('temp/img/dist/*.png')
        .pipe(gulp.dest('build/img/dist'));
})
gulp.task('rev_css',['css','js','rev_img','html','moveDist'],function(){
    return gulp.src('temp/css/temp/*.css')
        .pipe(rev())
        .pipe(gulp.dest('build/css'))
        .pipe(rev.manifest({
            base: './',
            merge: true
        }))
        .pipe(gulp.dest('./'));
});

gulp.task('rev_add',['rev_css'],function(){
    return gulp.src(
        ['rev-manifest.json','app/index.html']
    )
        .pipe(revcollector())
        .pipe(gulp.dest('build'))
});


gulp.task('default', ['clean'], function() {
    gulp.start('rev_add');
});
