var gulp=require('gulp');
var sass=require('gulp-sass');
var minifyCss=require('gulp-minify-css');
var jshint=require('gulp-jshint');
var uglify=require('gulp-uglify');
var webpack=require('gulp-webpack');
var webpackConfig=require('./webpack.config.js');

//sass编译为css并压缩
gulp.task('css',function(){
	gulp.src('assets/css/*.scss').pipe(sass()).pipe(minifyCss()).pipe(gulp.dest('build/css'));
});

//js使用jshint测试格式，使用webpack加载，uglify压缩
gulp.task('js',function(){
	gulp.src('assets/main.js').pipe(jshint()).pipe(webpack(webpackConfig)).pipe(uglify()).pipe(gulp.dest('build/'));
});

//监测文件变化则运行相关任务
gulp.task('watch',function(){
	gulp.watch('assets/css/*.scss',['css']);
	gulp.watch('assets/main.js',['js']);
});

gulp.task('default',['css','js','watch']);