const { src, dest, series, watch } = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const gulpAutoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

const watchOptions = { interval: 500 };

function copyAssetFiles() {
  let pipeStream = src('angularjs/app1/assets/**/*.svg');
  return pipeStream.pipe(dest('./public/assets'));
}

function generateCSS() {
  return src('angularjs/app1/style.scss', { base: '.' })
    .pipe(sass().on('error', sass.logError))
    .pipe(gulpAutoprefixer())
    .pipe(concat('style.css'))
    .pipe(dest('./public'));
}

function generateJs() {
  let pipeStream = src('angularjs/app1/**/*.js');

  return pipeStream.pipe(dest('./public'));
}

function generateHTML() {
  let pipeStream = src('angularjs/app1/**/*.html');
  return pipeStream.pipe(dest('./public'));
}


function watchChanges(done) {
  watch('angularjs/app1/**/*.js', watchOptions, series(generateJs));

  watch('angularjs/app1/**/*.html', watchOptions, series(generateHTML));

  watch('angularjs/app1/**/*.scss', watchOptions, series(generateCSS));

  done();

}

function copyNgAssetFiles() {
  let pipeStream = src('public/angular/assets/**/*.*');
  return pipeStream.pipe(dest('./public/assets'));
}

function concatNgCSS() {
  return src(['public/angular/**/*.css'], {
    base: '.'
  })
  .pipe(concat('ng.min.css'))
  .pipe(dest('public'))
}

function concatNgJs() {
  return src(['public/angular/**/*.js'], {
    base: '.'
  })
  .pipe(concat('ng.min.js'))
  .pipe(dest('public/'))
}

function watchNgChanges(done) {
  watch(['public/angular/**/*.js'], watchOptions, series(concatNgJs))

  watch(['public/angular/**/*.css'], watchOptions, series(concatNgCSS))

  watch(['public/angular/assets/*'], watchOptions, series(copyNgAssetFiles))

  done();
}

module.exports = {
  default: series(
    generateJs,
    generateHTML,
    copyAssetFiles,
    generateCSS
  ),

  watch: series (
    generateJs,
    generateHTML,
    copyAssetFiles,
    generateCSS,

    concatNgJs,
    concatNgCSS,
    copyNgAssetFiles,
    watchNgChanges,

    watchChanges,
  )
};
