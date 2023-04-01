export default {
  registerType: 'autoUpdate',
  devOptions: {
    enabled: true
  },
  manifest: {
    name: 'foodie',
    short_name: 'foodie',
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    description: 'A app to manage recipes',
    icons: []
  },
  workbox: {
    //importScripts: ['sw-code.js'],
  }
}
