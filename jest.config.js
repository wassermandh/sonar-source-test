module.exports = {
        reporters: ['default',  ['jest-sonar', {
            outputDirectory: '.',
            outputName: 'test-report.xml',
            reportedFilePath: 'relative'
        }]]
}