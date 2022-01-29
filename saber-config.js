// Saber config file
// https://saber.land/docs/saber-config.html

module.exports = {
  siteConfig: {
    description: 'An happy Sofware Enginner.',
    url: 'https://create-portfolio-demo.saber.land'
  },

  // Use the package `saber-theme-portfolio`
  // More: https://saber.land/docs/themes.html
  theme: 'portfolio',

  // Configure the theme
  themeConfig: {
    style: 'dark',
    github: 'pranahonk',
    twitter: 'pranahonk',
    sponsorLink: '',
    sponsorTip: 'Support my work',
    nav: [
      {
        text: 'Home',
        link: '/'
      },
      {
        text: 'About',
        link: '/about'
      }
    ],
    skills: [
      {
        topic: 'Javascript',
        description: `I love Javascript and I use it every single day.`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png'
      },
      {
        topic: 'Vue',
        description: `I love it, simple and powerful`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/vue/vue.png'
      },
      {
        topic: 'React',
        description: `I love it, concise and powerful`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png'
      },
      {
        topic: 'Java',
        description: `For my educational only`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png'
      },
      {
        topic: 'Php',
        description: `For my educational only`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/ccc16358ac4530c6a69b1b80c7223cd2744dea83/topics/php/php.png'
      },
      {
        topic: 'Python',
        description: `I use it for selenium`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/python/python.png'
      },
      {
        topic: 'nodejs',
        description: `Everytime making API, I always use`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png'
      },
      {
        topic: 'c',
        description: `I love it, fast and powerful`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/f3e22f0dca2be955676bc70d6214b95b13354ee8/topics/c/c.png'
      },
      {
        topic: 'babel',
        description: `An Javascript compiler`,
        image: 'https://raw.githubusercontent.com/github/explore/cb39e2385dfcec8a661d01bfacff6b1e33bbaa9d/topics/babel/babel.png'
      },
      {
        topic: 'css',
        description: `A language to improve the appearance of websites.`,
        image: 'https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/css/css.png'
      },
      {
        topic: 'laravel',
        description: `The PHP Framework for Web Artisans.`,
        // `image` is optional, by default we load from GitHub
        image: 'https://raw.githubusercontent.com/github/explore/56a826d05cf762b2b50ecbe7d492a839b04f3fbf/topics/laravel/laravel.png'
      }
    ],
  },

  permalinks: {
    page: '/:slug',
    post: '/posts/:slug'
  },

  plugins: [
    {
      resolve: 'saber-plugin-query-posts'
    },
    {
      resolve: 'saber-plugin-feed',
      options: {
        atomFeed: true
      }
    }
  ]
}
