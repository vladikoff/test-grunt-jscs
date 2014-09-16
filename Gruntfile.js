module.exports = function( grunt ) {
    "use strict";

    grunt.initConfig({
        jscs: {
            src: [
                'node_modules/grunt/lib/**/*.js',
                'node_modules/grunt-contrib-concat/tasks/**/*.js',
                'node_modules/grunt-contrib-connect/tasks/**/*.js',   
                'node_modules/grunt-contrib-copy/tasks/**/*.js',
                'node_modules/grunt-contrib-cssmin/tasks/**/*.js',
                'node_modules/grunt-contrib-jshint/tasks/**/*.js',                                                       
            ]
        }
    });
    grunt.loadNpmTasks('grunt-jscs');
    grunt.registerTask( "default", "jscs" );
};