module.exports = {
    title : 'Synix Docs',
    serviceWorker : true,
    description : 'Documentation for Synix',
    themeConfig: {
      serviceWorker : {
        updatePopup: { 
              message: "New content is available.", 
              buttonText: "Refresh" 
           }
      },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Commands', link: '/commands' },
        { text: 'Customize', link: '/customize' },
        { text: 'Contribute', link: '/contribute' },
      ],
      sidebar : 'auto',
    },
  }