module.exports = function(grunt) {

    // Get command line arguments
    var cssFile = grunt.option('css-file') || 'public/assets/css/main.min.css',
        jsFile = grunt.option('js-file') || 'public/assets/js/main.min.js',
        cssFilesTemplate = {},
        jsFilesTemplate = {},
        currentTimestamp = new Date().getTime();

    cssFilesTemplate[cssFile]   = [
        'public/assets/css/font-awesome.min.css',
        'public/assets/css/highlightjs-github.min.css',
        'public/assets/css/main.css'
    ];
    jsFilesTemplate[jsFile]     = [
        'public/assets/js/jquery.min.js',
        'public/assets/js/jquery.scrolly.min.js',
        'public/assets/js/highlight.pack.js',
        'public/assets/js/skel.min.js',
        'public/assets/js/main.js'
    ];

    // Project configuration.
    grunt.initConfig({

        // Load configuration
        pkg: grunt.file.readJSON('package.json'),

        // Minify app JS files into one file dropping console object
        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            main: {
                files: jsFilesTemplate
            }
        },

        // Minify CSS files
        cssmin: {
            main: {
                files: cssFilesTemplate
            }
        },

        processhtml: {
            main: {
                files: {
                    'templates/layout.html.twig': ['templates/layout.html.twig']
                }
            }
        },

        'string-replace': {
            main: {
                options: {
                    replacements: [{
                        pattern: /(.js|.css)\?v/ig,
                        replacement: '$1?v=' + currentTimestamp
                    }]
                },
                files : {
                    'templates/layout.html.twig': ['templates/layout.html.twig']
                }
            }
        }

    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-processhtml');

    // Default task.
    grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml', 'string-replace']);

};
