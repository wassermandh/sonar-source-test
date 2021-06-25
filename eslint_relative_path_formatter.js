module.exports = function (results) {
    return JSON.stringify(results.map((rule, idx) => {
        const cwd = process.cwd()
        rule.filePath = rule.filePath.replace(`${cwd}/`, '')
        return rule
    }))
};