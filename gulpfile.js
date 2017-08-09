/*
 * Copyright (c) 2013, Divio AG
 * Licensed under BSD
 * http://github.com/divio/djangocms-boilerplate-webpack
 */

// INFO:
// - The minimatch/graceful-fs warnings are from gulp, needs upgrade to 4.0 once released.

// #############################################################################
// IMPORTS
const argv = require('minimist')(process.argv.slice(2));
const gulp = require('gulp');

// #############################################################################
// SETTINGS
const PROJECT_ROOT = __dirname;
const PROJECT_PATH = {
    css: PROJECT_ROOT + '/static/css',
    html: PROJECT_ROOT + '/templates',
    images: PROJECT_ROOT + '/static/img',
    sass: PROJECT_ROOT + '/private/sass',
    sprites: PROJECT_ROOT + '/static/sprites',
    svg: PROJECT_ROOT + '/private/svg',
    js: PROJECT_ROOT + '/static/js',
    webpack: PROJECT_ROOT + '/private/js',
};
const PROJECT_PATTERNS = {
    css: [
        PROJECT_PATH.css + '/*base*.css',
        '!' + PROJECT_PATH.css + '/*-critical.css',
    ],
    images: [
        PROJECT_PATH.images + '/**/*',
    ],
    js: [
        '*.js',
        './tools/tasks/**/*.js',
        PROJECT_PATH.webpack + '*.config.js',
        PROJECT_PATH.webpack + '/**/*.js',
        '!' + PROJECT_PATH.webpack + '/*.min.js',
        '!' + PROJECT_PATH.webpack + '/**/*.min.js',
    ],
    sass: [
        PROJECT_PATH.sass + '/**/*.{scss,sass}',
        '!' + PROJECT_PATH.sass + '/libs/_svgsprite.scss',
    ],
    svg: {
        icons: [PROJECT_PATH.svg + '/icons/**/*.svg'],
        // Uncomment in order to have multiple icon sets
        // other: [PROJECT_PATH.svg + '/other/**/*.svg'],
    },
};

/**
 * Generic utility to import gulp tasks and pass options to them
 *
 * @param {String} id - task name
 * @param {Object} [extra] - optional options to pass
 * @returns {Function} - task definition
 */
function task(id, extra) {
    return require('./tools/tasks/' + id)(
        gulp,
        Object.assign(
            {
                PROJECT_ROOT: PROJECT_ROOT,
                PROJECT_PATH: PROJECT_PATH,
                PROJECT_PATTERNS: PROJECT_PATTERNS,
                argv: argv,
            },
            extra
        )
    );
}


// #############################################################################
// TASKS

/**
 * WARNING: postcss-critical-split is considered experimental and may be buggy, so it's disabled by default
 *
 * Usage:
 * - "gulp sass" (generates sass, splits the files, and injects the code)
 * - "gulp sass --debug" (to generate unminified css with sourcemaps)
 * - "gulp sass:compile" (just generates the base.css out of sass, handy to skip critical css)
 * - "gulp sass:critical" (splits the base.css with the critical css)
 * - "gulp sass:rest" (splits the base.css with the remaining "rest" css)
 * - "gulp sass:inline" (injects the base-critical.css as inline css into the template)
 */
// gulp.task('sass', ['sass:critical', 'sass:rest', 'sass:inline']);
gulp.task('sass', ['sass:compile']);
gulp.task('sass:compile', task('sass/compile'));
// gulp.task('sass:critical', ['sass:compile'], task('sass/critical'));
// gulp.task('sass:rest', ['sass:compile'], task('sass/rest'));
// gulp.task('sass:inline', ['sass:critical'], task('sass/inline'));

/**
 * Usage:
 * - "gulp lint" (runs sass and js linter)
 * - "gulp lint --debug" (switches linters to verbose mode)
 * - "gulp lint:sass" (runs the linter for sass)
 * - "gulp lint:javascript" (runs the linter for javascript)
 */
gulp.task('lint', ['lint:sass', 'lint:javascript']);
gulp.task('lint:sass', task('lint/sass'));
gulp.task('lint:javascript', task('lint/javascript'));

/**
 * Usage:
 * - "gulp webpack" (compiles javascript)
 * - "gulp webpack --debug" (disables compressions and adds sourcemaps)
 * - "gulp webpack:watch" (separately watch js instead of simply running `gulp`)
 * - "gulp webpack:compile" (compiles javascript)
 */
gulp.task('webpack', ['webpack:compile']);
gulp.task('webpack:compile', task('webpack/compile'));
gulp.task('webpack:watch', task('webpack/compile', { watch: true }));

/**
 * Usage:
 * - "gulp icons" (compiles to sprites)
 */
gulp.task('icons', ['icons:sprite:icons']);
gulp.task('icons:sprite:icons', task('icons/svgsprite', { svg: 'icons' }));
// Uncomment in order to have multiple icon sets
// gulp.task('icons:sprite:other', task('icons/svgsprite', { svg: 'other' }));

/**
 * Usage:
 * - "gulp optimise" (runs various optimisation tools)
 * - "gulp optimise:svg" (ensures svg files are minified and optimised)
 * - "gulp optimise:images" (ensures images files are optimised)
 */
gulp.task('optimise', ['optimise:svg']);
gulp.task('optimise:svg', task('optimise/svg'));
gulp.task('optimise:images', task('optimise/images'));

/**
 * process.env.GULP_MODE === 'production' means we have a limited
 * subset of tasks to speed up the deployment / installation process.
 */
gulp.task('default', ['sass', 'webpack', 'lint', 'watch']);

gulp.task('watch', function () {
    gulp.start('webpack:watch');
    gulp.watch(PROJECT_PATTERNS.sass, ['sass', 'lint:sass']);
    gulp.watch(PROJECT_PATTERNS.js, ['lint:javascript']);
});
// used on the cloud
gulp.task('build', ['sass', 'webpack']);
