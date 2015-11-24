module.exports = function(grunt) {
    var tasks;

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs', 'jshint']);
    grunt.registerTask('dependencies', ['clean:src', 'bower']);
    grunt.registerTask('test', ['clean:test', 'karma', 'coveralls']);
    grunt.registerTask('compile', [
        'clean:dist', 'copy', 'rename', 'replace', 'processhtml',
        'uglify', 'cssmin', 'htmlmin'
    ]);
    grunt.registerTask('e2e', ['protractor']);
    
    tasks = [
        'clean:dist',
        'lint',
        'dependencies',
        'test',
        'compile'
    ];
    
    if (process.env.TRAVIS) {
        tasks.push('e2e');
    }
    
    grunt.registerTask('default', tasks);
    
};
