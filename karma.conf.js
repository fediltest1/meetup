// Karma configuration
// Generated on Wed Nov 18 2015 00:30:05 GMT+0000 (UTC)

module.exports = function(config) {
    config.set({

        // base path that will be used to resolve all patterns
        // (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine'],


        // list of files / patterns to load in the browser
        files: [
            'src/app/lib/angular/angular.js',
            'src/app/lib/angular-mocks/angular-mocks.js',
            'src/app/lib/angular-aria/angular-aria.js',
            'src/app/lib/angular-animate/angular-animate.js',
            'src/app/lib/angular-material/angular-material.js',
            'src/app/lib/angular-material-icons/angular-material-icons.js',
            'src/app/lib/angular-route/angular-route.js',
            'src/app/lib/firebase/firebase-debug.js',
            'src/app/lib/angularfire/dist/angularfire.js',
            'src/app/js/app.js',
            'src/app/js/*/*.js',
            'test/app/js/**/*.spec.js'
        ],


        // list of files to exclude
        exclude: [],


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR ||
        // config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests
        // whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers:
        // https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true,

        // Concurrency level
        // how many browser should be started simultanous
        concurrency: Infinity
    });
};