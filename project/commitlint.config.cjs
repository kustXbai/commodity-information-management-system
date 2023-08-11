// 对于我们的提交commit信息， 也是有统一规范的， 不能随便写， 要让每个人都按照统一的标准来执行， 我们可以
// 利用commitlint来实现。
module.exports = {
    extends: ['@commitlint/config-conventional'],
    // 校验规则
    rules: {
        'type-enum': [
            2,
            'always', [
                'feat',
                'fix',
                'docs',
                'style',
                'refactor',
                'perf',
                'test',
                'chore',
                'revert',
                'build',
            ],
        ],
        'type-case': [0],
        'type-empty': [0],
        'scope-empty': [0],
        'scope-case': [0],
        'subject-full-stop': [0, 'never'],
        'subject-case': [0, 'never'],
        'header-max-length': [0, 'always', 72],
    },
}