import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({

  plugins: [

    VitePWA({

      registerType: 'autoUpdate',

      manifest: {

        name: 'Ibon Half Coach',

        short_name: 'IHC',

        description:
          'Entrenador personal para Half Vitoria 2027',

        theme_color: '#0f172a',

        background_color: '#0f172a',

        display: 'standalone',

        icons: [

          {
            src: '/pwa-192.png',
            sizes: '192x192',
            type: 'image/png'
          },

          {
            src: '/pwa-512.png',
            sizes: '512x512',
            type: 'image/png'
          }

        ]

      }

    })

  ]

})