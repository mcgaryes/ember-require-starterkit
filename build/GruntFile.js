module.exports = function(grunt) {

    'use strict';

    var NAME = 'Ember Starter-Kit';
    var DESCRIPTION = 'Ember Starter-Kit';
    var URL = 'https://www.yourdomainhere.com/';
    var VERSION = '0.1.0';
    var BANNER = '/**\n * ' + NAME + ' v' + VERSION + '\n * ' + DESCRIPTION + '\n * ' + URL + '\n */\n';

    // config
    grunt.initConfig({
        uglify: {
            options: {},
            all: {
                files: {
                    '../www/app/app.js': ['../www/app/app.js'],
                    '../www/assets/js/libs.js': ['../www/assets/js/libs.js']
                }
            }
        },
        jasmine: {
            tests: {
                options: {
                    specs: "../tests/specs/*.js",
                    template: "../tests/custom.tmpl"
                }
            },
            coverage: {
                src: ['../source/app/controller/*.js', '../source/app/model/*.js'],
                options: {
                    specs: '../tests/specs/*.js',
                    template: require('grunt-template-jasmine-istanbul'),
                    templateOptions: {
                        coverage: '../tests/bin/coverage/coverage.json',
                        report: '../tests/bin/coverage',
                        thresholds: {
                            lines: 10,
                            statements: 10,
                            branches: 10,
                            functions: 10
                        }
                    }
                }
            }
        },
        copy: {
            code: {
                files: {
                    "../www/favicon.ico": "../source/favicon.ico",
                    "../www/index.html": "../source/index.html",
                    "../www/assets/css/main.css": "../source/assets/css/main.css",
                    "../www/assets/data/bootstrap.json": "../source/assets/data/bootstrap.json",
                    "../www/assets/img/": "../source/assets/img/**",
                    "../www/package.json": "../source/package.json",
                    "../www/server.js": "../source/server.js"
                }
            },
            version: {
                options: {
                    processContent: function() {
                        return VERSION;
                    }
                },
                files: {
                    "../VERSION": "../VERSION"
                }
            }
        },
        yuidoc: {
            compile: {
                name: NAME,
                description: DESCRIPTION,
                version: VERSION,
                url: URL,
                options: {
                    paths: '../source/app/',
                    outdir: '../docs/'
                }
            }
        },
        jshint: {
            files: ['GruntFile.js', '../source/app/**/*.js'],
            options: {
                jshintrc: '../.jshintrc'
            }
        },
        sass: {
            all: {
                files: {
                    '../source/assets/css/main.css': '../source/assets/scss/main.scss'
                }
            }
        },
        watch: {
            sass: {
                files: ['../source/assets/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
                }
            },
            app: {
                files: ['../source/app/*.js', '../source/app/**/*.js'],
                tasks: ["concat:app"],
                options: {
                    debounceDelay: 250
                }
            },
            libs: {
                files: ['../source/assets/js/*.js*'],
                tasks: ["concat:libs"],
                options: {
                    debounceDelay: 250
                }
            }
        },
        concat: {
            app: {
                files: {
                    '../www/app/app.js': [
                        '../source/app/application.js',
                        '../source/app/routes.js',
                        '../source/app/model/application-model.js',
                        '../source/app/controller/application-controller.js',
                        '../source/app/main.js'
                    ]
                }
            },
            libs: {
                files: {
                    '../www/assets/js/libs.js': [
                        "../source/assets/js/jquery.js",
                        "../source/assets/js/handlebars.js",
                        "../source/assets/js/ember.js",
                        "../source/assets/js/ember-data.js"
                    ]
                }
            }
        }
    });

    // load npm tasks
    grunt.loadNpmTasks('grunt-contrib-yuidoc');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');


    // tasks
    grunt.registerTask("test", ["jshint" /*, "jasmine:tests"*/ ]);
    grunt.registerTask("development", ["test", "sass"]);
    grunt.registerTask("release", ["development", "concat", "uglify", "copy:code", "copy:version", "yuidoc"]);

};