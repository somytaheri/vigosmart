module.exports = function (grunt) {
    grunt.initConfig(
        {
            pkg: grunt.file.readJSON('package.json'),

            concat: {
                options: {
                    separator: ';'
                },
                dist: {
                    src: ['../include/js/**/*.js'],
                    dest: '../public/js/<%= pkg.name %>-all.js'
                }
            },

            uglify: {
                jstarget: {
                    options: {
                        paths: ["../include/js"]
                    },
                    files: {
                        '../public/js/<%= pkg.name %>-min.js': ['../public/js/<%= pkg.name %>-all.js']
                    }
                }
            },

            less: {
                development: {
                    options: {
                        paths: ["../include/less"]
                    },
                    files: {
                        "../public/css/<%= pkg.name %>-style.css": "../include/less/main.less"
                    }
                }
            },

            cssmin:
            {
                compress:{
                    files:{
                        "../public/css/<%= pkg.name %>-style.min.css":["../public/css/<%= pkg.name %>-style.css"]
                    }
                }
            },

            sprite: {
                global: {
                    src: '../public/img/sprite/*.*',
                    destImg: '../public/img/sprite-global.png',
                    destCSS: '../include/less/sprite.less',
                    imgPath: '../img/sprite-global.png',
                    padding: 20,
                    engine: 'phantomjs'
                }
            },

            watch: {

                set1: {
                    files: ['../include/js/**/*.js'],
                    tasks: ['concat','uglify']
                },
                set2: {
                    files: ['../include/less/**/*'],
                    tasks: ['less:development','cssmin']
                }

            }

        });
    grunt.registerTask('build', ['concat', 'uglify', 'less:development','cssmin']);
    grunt.registerTask('start', ['build','watch']);
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-spritesmith');
}