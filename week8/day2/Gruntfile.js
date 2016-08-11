
module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        // tasks and targets
        karma: {

            services: {

                options: {
                    frameworks: [ 'mocha', 'chai' ],
                    client: {
                        mocha: {
                            ui: 'tdd'
                        }
                    },
                    browsers: ['PhantomJS'],
                    singleRun: true,
                    files: [
                        'node_modules/angular/angular.min.js',
                        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'js/app/gh.module.js',
                        'js/**/*.service.js',
                        'test/specs/**/*.service.spec.js'
                    ],

                    preprocessors: {
                        'js/**/*.service.js': ['coverage']
                    },
                    reporters: [ 'dots', 'coverage' ],
                    coverageReporter: {
                        type: 'text-summary'
                    }
                }

            }

        }

    });

    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', ['karma']);
};
