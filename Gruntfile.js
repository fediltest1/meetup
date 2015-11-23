module.exports = function(grunt) {

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs', 'jshint']);
    
    grunt.registerTask('default', [
        'lint'
    ]);
    
};
