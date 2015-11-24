module.exports = function(grunt) {

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs', 'jshint']);
    grunt.registerTask('dependencies', ['clean:src', 'bower']);
    grunt.registerTask('test', ['clean:test', 'karma', 'coveralls']);
    
    grunt.registerTask('default', [
        'clean:dist',
        'lint',
        'dependencies',
        'test'
    ]);
    
};
