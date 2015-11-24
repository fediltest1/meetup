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
    grunt.registerTask('e2e', ['http-server','protractor']);
    grunt.registerTask('docs', ['ngdocs']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('changelog', ['conventionalChangelog']);
    
    tasks = [
        'clean:dist',
        'lint',
        'dependencies',
        'test',
        'compile',
        'docs'
    ];
    
    if (process.env.TRAVIS) {
        tasks.push('e2e');
        tasks.push('deploy');
    }
    
    grunt.registerTask('default', tasks);
    
};
