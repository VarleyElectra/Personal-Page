// https://v3.nuxtjs.org/api/configuration/nuxt.config
import {useHead} from "unhead";
export default defineNuxtConfig({
    app: {
      head: {
          link: [
              { rel: 'icon', type: 'image/x-icon', href: '~/public/favicon.ico' }
          ]
      }
    },
    css: ["@/assets/styles/main.scss"],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@import "@/assets/styles/variables.scss";',
                },
            },
        },
    },
});

