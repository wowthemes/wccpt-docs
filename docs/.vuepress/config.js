import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  base: '/wccpt-docs/',
  lang: 'en-US',
  title: 'WooCommerce Custom Post Type',
  description: 'WooCommerce Custom Post Type WordPress Plugin - Documentation',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    docRepo: 'wowthemes/wccpt-docs',
    repo: 'https://www.wow-themes.com/plugins/woocommerce-custom-post',
    repoLabel: 'Download',
    editLink: false,
    sidebar: [
      {text: 'Installation', link: '/'},
      {text: 'Getting Started', link: '/Configure.html'},
      {text: 'Shortcodes', link: '/Shortcodes.html'},
      {text: 'Elementor', link: '/Elementor.html'},
      {text: 'Screenshots', link: '/Screenshot.html'},
    ],
    sidebarDepth: 2
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
})