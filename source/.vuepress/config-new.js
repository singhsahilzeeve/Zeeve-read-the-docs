module.exports = {
    title: 'Zeeve Documentation',
    description: "Zeeve documentation",
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    markdown: {
        externalLinks: { target: '_blank', rel: 'nofollow noopener' }
    },
    themeConfig: {
        logo: '/img/zeeve-head.webp',
        apiDocsURL: `http://localhost:8080/api/reference/`,
        nav: [
            { text: 'Support', link: '/Zeeve_Support' },
            { text: 'Log in', link: 'https://app.zeeve.io/auth/login?utm_info=e30' },
            { text: 'Sign Up', link: 'https://app.zeeve.io/' }
        ],
        sidebar: [
            
            '/ZeeveOverview',
            '/AccountCreation',
            '/cloud_authorization',
            '/subscriptions',
            '/rollups',
            '/api-endpoint',
            '/Howtocreatemyfirstnetwork',
            '/HyperledgerFabric',
            '/Ethereum',
            '/Corda',
            '/Avalanche',
            '/Binance',
            '/Coreum',
            '/Dcomm',
            '/EnergyWeb',
            '/Fantom',
            '/Polygon',
            '/Tron',
            '/Credits',
            '/Product_configure',
            '/DevelopmentPractices',
            '/HyperledgerFabric',
            '/Blockchain_Protocols',
            '/References',
            '/zeeveDistributedFileSystem',
        '/Zeeve_Support',
        ],
        sidebarDepth: 2,
        docsRepo: 'zeeve/docs',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: 'Edit on GitHub',
        nextLinks: false,
        prevLinks: false
    },
    plugins: {
        '@vuepress/active-header-links': true,
        '@vuepress/back-to-top': true,
        'clean-urls': {
            normalSuffix: ''
        },
        'check-md': true,
        'code-switcher': true,
	'@dovyp/vuepress-plugin-clipboard-copy': true,
    }
}
