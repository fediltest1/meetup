module.exports = function(grunt) {

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs', 'jshint']);
    grunt.registerTask('dependencies', ['bower']);
    
    grunt.registerTask('default', [
        'lint',
        'dependencies'
    ]);
    
};
