module.exports = function(grunt) {
    'use strict';

    grunt.initConfig({

        clean: [ 'build/' ],

        jshint: {   // task name
            options: {
                // these options apply to ALL targets
                jshintrc: '.jshintrc',
                ignores: [ 'src/js/vendor/**' ]
            },
            all: {  // target name
                files: {  // target-specific option
                    // the files to run this task on
                    src: [ 'src/js/**/*.js', 'test/specs/**/*.js', 'Gruntfile.js' ]
                }
            }
            // I could have multiple targets in here...
            // each target can have its own options for this task
        },

        sass: {
            all: {
                files: {
                    'build/css/styles.css': 'src/sass/main.scss'
                }
            }
        },

        copy: {
            html: {  // arbitrary target name!
                files: [
                    { expand: true, cwd: 'src/', src: [ 'index.html' ], dest: 'build/' }
                ]
            },
            vendorjs: {
                files: [
                    { expand: true, cwd: 'src/js/', src: [ 'vendor/jquery/dist/jquery.min.js' ], dest: 'build/js/' }
                ]
            }
        },

        concat: {

            js: {
                options: {
                    sourceMap: true
                },
                src: [ 'src/js/main.js', 'src/js/*.js', 'src/js/views/**/*.js' ],
                dest: 'build/js/app.js'
            }

        },

        connect: {
            testing: {
                options: {
                    port: 8888,
                    base: '.'
                }
            }
        },
        mocha: {
            all: {
                options: {
                    urls: [
                        'http://localhost:8888/test/math.html',
                        'http://localhost:8888/test/other.html'
                    ]
                }
            }
        }

    });

    // loading plugins
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-mocha');
    grunt.loadNpmTasks('grunt-contrib-connect');

    // setting up task aliases
    grunt.registerTask( 'test', [ 'connect', 'mocha' ] );
    grunt.registerTask( 'build', [ 'clean', 'jshint', 'test', 'concat', 'sass', 'copy' ] );
    grunt.registerTask( 'no-tests', [ 'clean', 'concat', 'sass', 'copy' ] );
    grunt.registerTask( 'default', [ 'build' ] );

};
