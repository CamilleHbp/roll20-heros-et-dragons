// Sass configuration
const { dest, parallel, series, src, watch } = require('gulp');
const concat = require('gulp-concat');
const pug = require('gulp-pug');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

const files = {
  pug: 'src/**/*.pug',
  sass: 'src/**/*.scss',
};

function buildPug() {
  console.log('Pug path ' + files.pug);
  return src(files.pug)
    .pipe(concat('heros_et_dragons_v1.pug'))
    .pipe(
      pug({
        pretty: true,
      })
    )
    .pipe(dest('.'));
}

function buildSass() {
  console.log('Sass path ' + files.sass);
  return src(files.sass, { sourcemaps: true })
    .pipe(concat('heros_et_dragons_v1.scss'))
    .pipe(sass())
    .pipe(dest('.'));
}

function buildAll(done) {
  series(buildPug, buildSass);
  done();
}

function watchPug() {
  watch(files.pug, buildPug);
}

function watchSass() {
  watch(files.sass, buildSass);
}

function watchAll(done) {
  console.log('watching...');
  //   parallel(watchPug, watchSass);
  done();
}

exports.build = parallel(buildPug, buildSass);
// exports.default = series(build, watch);
exports.default = series(buildAll, watchAll);
