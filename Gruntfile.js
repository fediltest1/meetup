module.exports = function(grunt) {
    var tasks;

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs', 'jshint']);
    grunt.registerTask('dependencies', ['clean:src', 'bower']);
    grunt.registerTask('test', ['clean:test', 'karma', 'coveralls']);
    grunt.registerTask('e2e', ['protractor']);
    
    tasks = [
        'clean:dist',
        'lint',
        'dependencies',
        'test'
    ];
    
    if (process.env.TRAVIS) {
        tasks.push('e2e');
    }
    
    grunt.registerTask('default', tasks);
    
};
