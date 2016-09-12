module.exports = function(grunt) {

grunt.initConfig({
    babel: {
        options: {
            "sourceMap": true
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/js",
                "src": ["**/*.jsx", "**/*.js"],
                "dest": "src/js/js-compiled/",
                "ext": "-compiled.js"
            }]
        }
    },
    uglify: {
        all_src : {
            options : {
              sourceMap : true,
              sourceMapName : 'build/js/sourceMap.map'
            },
            src : 'src/js/js-compiled/**/*-compiled.js',
            dest : 'build/js/script.min.js'
        }
    },
    sass: {
        dist: {
            files: [{
                expand: true,
                cwd: 'src/scss',
                src: ['*.scss'],
                dest: 'build/css',
                ext: '.css'
            }]
        }
    },
    jade: {
        compile: {
            options: {
                pretty: true,
            },
            files: [ {
              cwd: "src/jade",
              src: "**/*.jade",
              dest: "build/templates",
              expand: true,
              ext: ".html"
            } ]
        }
    },
    watch: {
        css: {
            files: ['src/scss/*.scss'],
            tasks: ['sass']
        },
        js: {
            files: ['src/js/*.jsx', 'src/js/*.js'],
            tasks: ['babel','uglify']
        },
        jade: {
            files: 'src/jade/*.jade',
            tasks: ['jade']
        }
    }

});
    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task
    grunt.registerTask("default", ["babel", "uglify", "sass", "jade"]);
};