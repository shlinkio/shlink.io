module.exports = grunt => {

    const cssFile = grunt.option('css-file') || 'public/assets/css/main.min.css';
    const jsFile = grunt.option('js-file') || 'public/assets/js/main.min.js';
    const cssFilesTemplate = {};
    const jsFilesTemplate = {};
    const currentTimestamp = new Date().getTime();

    cssFilesTemplate[cssFile] = [
        'public/assets/css/font-awesome.min.css',
        'public/assets/css/highlightjs-github.min.css',
        'public/assets/css/main.css',
    ];
    jsFilesTemplate[jsFile] = [
        'public/assets/js/jquery.min.js',
        'public/assets/js/jquery.scrolly.min.js',
        'public/assets/js/highlight.pack.js',
        'public/assets/js/skel.min.js',
        'public/assets/js/typeit.min.js',
        'public/assets/js/main.js',
    ];

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

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

        cssmin: {
            main: {
                files: cssFilesTemplate
            }
        },

        processhtml: {
            main: {
                files: {
                    'templates/layout.phtml': ['templates/layout.phtml']
                }
            }
        },

        'string-replace': {
            main: {
                options: {
                    replacements: [{
                        pattern: /(.js|.css)\?v=/ig,
                        replacement: `$1?v=${currentTimestamp}`
                    }]
                },
                files : {
                    'templates/layout.phtml': ['templates/layout.phtml']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-string-replace');
    grunt.loadNpmTasks('grunt-processhtml');

    grunt.registerTask('default', ['uglify', 'cssmin', 'processhtml', 'string-replace']);

};
