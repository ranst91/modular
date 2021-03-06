'use strict';
//Some dependencies
var gulp = require('gulp');
var connect = require('gulp-connect'); //run a dev server
var open = require('gulp-open'); //open a url in a web browser
var browserify = require('browserify'); // BundlesJS
var source = require('vinyl-source-stream'); //Use conventional text streams with Gulp
var concat = require('gulp-concat'); // Add files together
var eslint = require('gulp-eslint');
var sass = require('gulp-sass');
//A Config to point directories, port, the url of the web server w'ere about to use
var config = {
    port: 1337,
    devBaseUrl: 'http://localhost',
    paths: {
        html: './src/*.html',
        components: './src/components/**.***.html',
        js: './src/**/*.js',
        css: [
            'node_modules/angular-toastr/dist/angular-toastr.css',
            'src/css/styles.css'
        ],
        sass: './src/sass/**.scss',
        dist: './dist',
        views: './dist/views',
        mainJS: './src/app.js'
    }
};
//Start a server
gulp.task('connect', function () {
   connect.server({
       root: ['dist'],
       port: config.port,
       base: config.devBaseUrl,
       livereload: true
   });
});

//Open up a browser window
gulp.task('open', ['connect'], function () {
    gulp.src('dist/index.html')
        .pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

//Load up the index.html file for the app
gulp.task('html', function () {
    gulp.src(config.paths.html)
        .pipe(gulp.dest(config.paths.dist))
        .pipe(connect.reload())
});

gulp.task('components_html', function () {
    gulp.src(config.paths.components)
        .pipe(gulp.dest(config.paths.views))
        .pipe(connect.reload())
});

gulp.task('sass', function () {
    return gulp.src(config.paths.sass)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src/css'));
});

//Concat any css into 1 file called bundle.css
gulp.task('css', function () {
    gulp.src(config.paths.css)
        .pipe(concat('bundle.css'))
        .pipe(gulp.dest(config.paths.dist + '/css'))
});
//Concat any js into 1 file called bundle.js
//Compile and run any js file
gulp.task('js', function () {
    browserify(config.paths.mainJS)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.paths.dist + '/scripts'))
        .pipe(connect.reload());
});

gulp.task('lint', function () {
    return gulp.src(config.paths.js)
        .pipe(eslint({config: '.eslintrc.json'}))
        .pipe(eslint.format())
});

//Watches the html and JS files for a change
gulp.task('watch', function () {
    gulp.watch(config.paths.html, ['html']);
    gulp.watch(config.paths.components, ['components_html']);
    // gulp.watch(config.paths.sass, ['sass', 'css']);
    gulp.watch(config.paths.js, ['js']);
});

/**
 * Running the task "gulp" will:
 * 1. create the html file in the dist directory
 * 2. Concat and compile js and css to include them in the html
 * 3. Check for any js errors throughout development
 * 4. Set up a local dev server, Open a web browser the get the stuff running
 * 5. Watch for any real time changes
 */
gulp.task('default', ['html', 'components_html', 'js', 'open', 'watch']);