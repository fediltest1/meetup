module.exports = function(grunt) {

    require('load-grunt-initconfig')(grunt);

    grunt.registerTask('lint', ['jscs']);
    
    grunt.registerTask('default', [
        'lint'
    ]);
    
};
