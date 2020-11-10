module.exports = {
    title: "SP Documentatie (Dev)",
    locales: {
        '/': {
            lang: 'nl-NL',
            title: '',
            description: 'SP Documentatie (under development)'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['link', { rel: 'canonical', href: 'https://docs-dev.socialistischepartij.nl' }],
        ['meta', { name: 'theme-color', content: '#ec1b23' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    themeConfig: {
        docsDir: 'docs',
        repo: 'capriosa/vuepress-deploy',

        nav: [{
                text: 'Overzicht',
                link: '/docs/',
            },

        ]

    }
}
