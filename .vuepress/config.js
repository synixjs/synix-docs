module.exports = {
    title: 'Synix Docs',
    serviceWorker: true,
    head: [
        ['link', { rel: 'short icon', type: 'image/png', href: 'assets/logo/sx_logo.png' }],
        ['meta', { name: 'google-site-verification', content: 'm9GfZJM_yujiLa-Yt4xuIIpqhHPYRMupjFrMPTSUdyc' }]
    ],
    description: 'Documentation for Synix',
    themeConfig: {
        serviceWorker: {
            updatePopup: {
                message: "New content is available.",
                buttonText: "Refresh"
            }
        },
        nav: [
            { text: 'Commands', link: '/ccc/commands.html' },
            { text: 'Customize', link: '/ccc/customize.html' },
            { text: 'Contribute', link: '/ccc/contribute.html' },
        ],
        sidebar: 'auto',
        logo: 'assets/logo/sx_logo.png',
    },
}