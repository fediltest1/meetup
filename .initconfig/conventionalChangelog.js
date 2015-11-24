module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-conventional-changelog');
    return {
        options: {
            changelogOpts: {
                preset: 'angular',
                releaseCount: 0
            },
            parserOpts: {
                headerPattern: /^(\w*)(?:\(([\w\$\.\-\* ]*)\))?\:? (.*)$/
            }
        },
        release: {
            src: 'CHANGELOG.md'
        }
    }
};
