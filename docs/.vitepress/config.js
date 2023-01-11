export default {
    title: 'pen-doc',
    base:'/',
    description: 'pen document project.',
    head: [
        [
          'link',
          { rel: 'icon', href: '/icon.png', type: 'image/png' }
        ]
      ],
    themeConfig: {
        logo: '/icon.png',
        lastUpdatedText: 'Updated Date',
        socialLinks: [
            { icon: 'github', link: 'https://github.com/rr13k/pen' },],
        sidebar: [
            {
                text: '开始',
                items: [
                    { text: '简介', link: '/index' },
                    { text: '快速上手', link: '/getting-started' },
                ]
            },
            {
                text: '基础',
                items: [
                    { text: '路由', link: '/temps/router' },
                    { text: '中间件', link: '/getting-started' },
                    { text: 'session', link: '/getting-started' },
                    { text: '配置文件', link: '/temps/options' },
                ]
            }
        ]
    }
}