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
    repo: 'wowthemes/wccpt-docs',
    repoLabel: 'GitHub',
    // sidebar: true,
  }),
  plugins: [
    searchPlugin({
      // options
    }),
  ],
})