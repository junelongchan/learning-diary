const utils = require('./utils')
module.exports = {
    title: 'learning-diary',
    description: '个人笔记 beta',
    base: '/learning-diary/',
    head: [
        [
        'link',
        {
            rel: 'icon',
            href: '/favicon.ico'
        }
        ]
    ],
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '文章',
                link: '/article/'
            }
        ],

        sidebar: utils.inferSiderbars(),
        lastUpdated: '上次更新',
        repo: 'junelongchan/learning-diary',
        repoLabel: 'GitHub',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '在 GitHub 上编辑此页',
        sidebarDepth: 3
    },
    configureWebpack: {
        resolve: {
            alias: {
                '@public': './public'
            }
        }
    },
    markdown: {
        config: md => {
            // use more markdown-it plugins!
            md.use(require('markdown-it-include'))
        }
    }
  }