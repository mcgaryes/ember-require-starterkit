module.exports = function(grunt) {

    'use strict';

    var NAME = 'Application';
    var DESCRIPTION = 'Ember application.';
    var URL = 'https://www.yourdomainhere.com/';
    var VERSION = '0.1.0';
    var BANNER = '/**\n * ' + NAME + ' v' + VERSION + '\n * ' + DESCRIPTION + '\n * ' + URL + '\n */\n';

    // config
    grunt.initConfig({
        uglify: {
            options: {},
            all: {
                files: {
                    '../www/app/main.js': ['../www/app/main.js'],
                    '../www/assets/js/libs.js': ['../www/assets/js/libs.js']
                }
            }
        },
        jasmine: {
            all: {
                options: {
                    specs: "../tests/specs/*.js",
                    helpers: '../tests/*.helper.js',
                    template: "../tests/custom.tmpl"
                },
                src: []
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
                tasks: ['sass',"copy:code"],
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
            copy: {
                files: ['../source/index.html'],
                tasks: ["copy:code"],
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
                    '../www/app/main.js': [
                        '../source/app/main.js',
                        '../source/app/controllers/*.js',
                        '../source/app/views/*.js'
                    ]
                }
            },
            libs: {
                files: {
                    '../www/assets/js/libs.js': [
                        "../source/assets/js/jquery-1.9.1.js",
                        "../source/assets/js/handlebars-1.0.0.js",
                        "../source/assets/js/ember-1.0.0-rc.7.js"
                    ]
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "Ember.TEMPLATES"
                },
                files: {
                    "../www/app/templates.js": ["../source/app/views/*.hbs"]
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
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    // tasks
    grunt.registerTask("test", ["jshint", "jasmine"]);
    grunt.registerTask("development", [/*"test",*/ "sass"]);
    grunt.registerTask("release", ["development", "concat", "uglify", "copy:code", "copy:version", "yuidoc"]);

};