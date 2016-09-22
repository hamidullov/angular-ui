const gulp = require('gulp');
const sass = require('gulp-sass');
const replace = require('gulp-replace');
const args = require('yargs').argv;



function getFolder () { 
    return process.env.FOLDER || 'www';
}

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
