export default {
    title: 'pen-doc',
    base:'/pen-doc',
    description: 'pen document project.',
    outDir:"../pen-doc",
    head: [
        [
          'link',
          { rel: 'icon', href: '/pen-doc/icon.png', type: 'image/png' }
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
                    { text: '中间件', link: '/temps/plug' },
                    { text: 'session', link: '/temps/session' },
                    { text: 'Gen Model', link: '/temps/gen-model' },
                    { text: '配置文件', link: '/temps/options' },
                ]
            }
        ]
    }
}