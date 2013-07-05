module.exports = function(grunt) {

    'use strict';

    var NAME = 'Ember Starter-Kit';
    var DESCRIPTION = 'Ember Starter-Kit';
    var URL = 'https://www.yourdomainhere.com/';
    var VERSION = '0.1.0';
    var BANNER = '/**\n * ' + NAME + ' v' + VERSION + '\n * ' + DESCRIPTION + '\n * ' + URL + '\n */\n';

    var path = require('path');
    var uglify = {};
    var srcpath = '../source/assets/js/';
    var destpath = '../www/assets/js/';

    grunt.file.expand({
        cwd: srcpath
    }, '**/*.js').forEach(function(relpath) {
        var excludes = ["ember.js", "jquery.js", "handlebars.js"];
        var shouldAdd = true;
        for (var i = 0; i < excludes.length; i++) {
            if (relpath === excludes[i]) {
                shouldAdd = false;
            }
        }
        if (shouldAdd) {
            uglify[path.join(destpath, relpath)] = path.join(srcpath, relpath);
        }
    });

    // config
    grunt.initConfig({
        uglify: {
            options: {},
            dist: {
                files: uglify
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
        plato: {
            all: {
                options: {
                    jshint: grunt.file.readJSON('../.jshintrc'),
                    exclude: /\.min\.js$/,
                    complexity: {
                        logicalor: true,
                        switchcase: true,
                        forin: true,
                        trycatch: true
                    }
                },
                files: {
                    '../tests/bin/reports': ['../source/app/**/*.js']
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
        requirejs: {
            all: {
                options: {
                    appDir: "../source/app",
                    baseUrl: "./",
                    mainConfigFile: "../source/app/config.js",
                    locale: "en-us",
                    dir: "../www/app",
                    optimize: "uglify",
                    name: "main",
                    fileExclusionRegExp: /^\./
                }
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
            all: {
                files: ['../source/assets/scss/*.scss'],
                tasks: ['sass'],
                options: {
                    nospawn: true
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
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-plato');

    // tasks
    grunt.registerTask("test", ["jshint", "jasmine:tests" /*, "jasmine:coverage"*/ , "plato"]);
    grunt.registerTask("development", ["test", "sass"]);
    grunt.registerTask("release", ["development", "requirejs", "uglify", "copy:code", "copy:version", "yuidoc"]);

};