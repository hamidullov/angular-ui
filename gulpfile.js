const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const args = require('yargs').argv;
const del = require('del');
const preprocess = require('gulp-preprocess');
const babel = require('gulp-babel');
const ngAnnotate = require('gulp-ng-annotate');
const concat = require('gulp-concat');
const ngHtml2Js = require("gulp-ng-html2js");
const uglify = require('gulp-uglify');
const gulpif = require('gulp-if');
const useref = require('gulp-useref');
const rev = require('gulp-rev');
const revReplace = require('gulp-rev-replace');
const cleanCSS = require('gulp-clean-css');


const getFolder = () => process.env.FOLDER || 'www';


/**
 * Compile sass to css
 */
gulp.task('sass', function() {
	return gulp.src('www_src/scss/style.scss')
		.pipe(sass({
			errLogToConsole: true,
			sourceComments: 'map',
			sourceMap: 'sass'
		}))
		.pipe(gulp.dest('www_src/css/'))
});

gulp.task('watch_sass', function() {
	gulp.watch('www_src/scss/**/*.scss', ['sass']);
});

/**
 * Add translation entity
 * example: gulp translate --name=TITLE --ru=ЗАГОЛОВОК --en=Title
 */
gulp.task('translate', function() {
	var name = args.name,
		ru = args.ru,
		en = args.en;

	if(!name || !ru || !en)
		throw new Error('Please set required params (f.e. gulp translate --name=TITLE --ru=ЗАГОЛОВОК --en=Title)');

	console.log('Setting translation\nKEY: ' + name + '\nru: ' + ru + '\nen: ' + en);

	gulp.src(['www_src/js/app-translate.js'])
		.pipe(replace(
			/(\$translateProvider\.translations\('en', \{(?:[\s\S](?!(\s+})))+[\s\S])/,
			'$1,\n\t\t\t' + name + ': \'' + en + '\''
		))
		.pipe(replace(
			/(\$translateProvider\.translations\('ru', \{(?:[\s\S](?!(\s+})))+[\s\S])/,
			'$1,\n\t\t\t' + name + ': \'' + ru + '\''
		))
		.pipe(gulp.dest('www_src/js/'));

	console.log('Success!');
});



/**
 * Remove destination folder if already exists
 */
gulp.task('clear', function() {
	return del([
		`${getFolder()}/*`
	]);
});


/**
 * Copy sources from www_src to www folder
 */
gulp.task('copy', ['clear', 'sass'], function() {
	return gulp.src(['www_src/**/*'])
		.pipe(gulp.dest(`${getFolder()}/`));
});

/**
 * Process all js files and index.html to set environmental
 * Depends on NODE_ENV variable
 * see: https://www.npmjs.com/package/gulp-preprocess
 */

gulp.task('preprocess', ['copy'], function() {
	return gulp.src([`${getFolder()}/js/**/*.js`, `${getFolder()}/index.html`], {base: `${getFolder()}/`})
		.pipe(preprocess())
		.pipe(gulp.dest(`${getFolder()}/`));
});


/**
 * Add angularjs dependency injection annotations
 * see: https://www.npmjs.com/package/gulp-ng-annotate/
 */
gulp.task('annotate', ['preprocess'], function() {
	return gulp.src([`${getFolder()}/js/**/*.js`], {base: `${getFolder()}/`})
		.pipe(ngAnnotate())
		.pipe(gulp.dest(`${getFolder()}/`));
});

/**
 * Compile js sources by babel (ES2015 -> ES5)
 * see: https://babeljs.io/
 */
gulp.task('babel', ['annotate'], function() {
	return gulp.src([`${getFolder()}/js/**/*.js`], {base: `${getFolder()}/`})
		.pipe(babel({presets: ['es2015']}))
		.pipe(gulp.dest(`${getFolder()}/`));
});


/**
 * Compile html templates to js in order to concatenate all of them to prevent partivular requests
 * see https://github.com/karlgoldstein/grunt-html2js
 */
gulp.task('html2js', ['babel'], function() {
	return gulp.src([`${getFolder()}/js/**/*.html`, `${getFolder()}/templates/*.html`], {base: `${getFolder()}/`})
		.pipe(ngHtml2Js({
			moduleName: "templates"
		}))
		.pipe(concat("templates.js"))
		.pipe(gulp.dest(`${getFolder()}/js/`));
});


/**
 * Minify files
 * see: https://www.npmjs.com/package/gulp-uglify
 */
gulp.task('uglify', ['html2js'], function() {
	return gulp.src([`${getFolder()}/js/**/*.js`, `${getFolder()}/templates/*.js`], {base: `${getFolder()}/`})
		.pipe(uglify())
		.pipe(gulp.dest(`${getFolder()}/`));
});


/**
 * Concatinate all js and css files (including templates) that are linked in index.html
 * see: https://www.npmjs.com/package/gulp-useref
 */
gulp.task('concat', ['uglify'], function() {
	return gulp.src(`${getFolder()}/index.html`, {base: `${getFolder()}/`})
		.pipe(useref())
        .pipe(gulpif('*.css', cleanCSS()))
        .pipe(gulpif('*.js', rev()))
   		.pipe(gulpif('*.css', rev()))
   		.pipe(revReplace())
        .pipe(gulp.dest(`${getFolder()}/`));
});


// example: NODE_ENV='production' FOLDER='www' gulp build
gulp.task('build', ['concat']);

// example: NODE_ENV='development' FOLDER='www' gulp build_test
gulp.task('build_test', ['babel']);