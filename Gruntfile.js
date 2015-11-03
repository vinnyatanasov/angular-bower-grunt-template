"use strict";

module.exports = function(grunt) {
    
    // Configure tasks
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        
        ngAnnotate: {
            options: {
                singleQuotes: false,
            },
            app: {
                files: {
                    'js/app-annotate.js': ['js/app.js']
                },
            }
        },
        
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: [
                    'bower_components/jquery/jquery.js',
                    'bower_components/jquery/jquery-migrate.js',
                    'bower_components/angular/angular.js',
                    'bower_components/angular-route/angular-route.js',
                    'js/app-annotate.js'
                    ],
                dest: 'js/build/<%= pkg.name %>.js'
            }
        },
        
        uglify: {
            build: {
                src: 'js/build/<%= pkg.name %>.js',
                dest: 'js/build/<%= pkg.name %>.min.js'
            }
        },
        
        sass: {
            dist: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'css/build/main.css': 'css/main.scss'
                }
            }
        },
        
        watch: {
            scripts: {
                files: ['js/*.js'],
                tasks: ['ngAnnotate', 'concat'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['css/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            }
        }
    
    });
    
    // Load plug-ins
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-ng-annotate');
    
    // Tell what to do when run 'grunt' command
    grunt.registerTask('default', ['ngAnnotate', 'concat', 'uglify', 'sass']);
    
};