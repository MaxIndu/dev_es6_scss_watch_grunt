module.exports = function(grunt) {

grunt.initConfig({
    babel: {
        options: {
            "sourceMap": false
        },
        dist: {
            files: [{
                "expand": true,
                "cwd": "src/js",
                "src": ["**/*.jsx", "**/*.js"],
                "dest": "src/js-compiled/",
                "ext": "-compiled.js"
            }]
        }
    },
    uglify: {
        all_src : {
            options : {
              sourceMap : false,
              sourceMapName : 'src/build/sourceMap.map'
            },
            src : 'src/js-compiled/**/*-compiled.js',
            dest : 'src/build/script.min.js'
        }
    },
    sass: {
        dist: {
            files: [{
                expand: true,
                cwd: 'scss',
                src: ['*.scss'],
                dest: 'css',
                ext: '.css'
            }]
        }
    },
    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },
      js: {
        files: ['src/js/*.jsx', 'src/js/*.js'],
        tasks: ['babel','uglify']
      }
    }

});

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask("default", ["babel", "uglify", "sass"]);
};