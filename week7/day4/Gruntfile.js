
module.exports = function(grunt) {
    'use strict';


    grunt.initConfig({

        karma: {
            all: {
                options: {
                    frameworks: ['mocha', 'chai'],
                    client: {
                        mocha: {
                            ui: 'tdd'
                        }
                    },
                    browsers: ['PhantomJS'],
                    singleRun: true,
                    files: [
                        'node_modules/angular/angular.js',
                        'node_modules/angular-mocks/angular-mocks.js',
                        'src/js/school.module.js',
                        'src/js/**/*.js',
                        'test/specs/**/*.spec.js'
                    ]
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-karma');


    grunt.registerTask('default', [ 'karma' ]);

};
