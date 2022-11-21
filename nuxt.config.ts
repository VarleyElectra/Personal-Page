// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    app: {
      baseURL: process.env.NODE_ENV === 'production'
          ? '/Personal-Page/'
          : '/',
      buildAssetsDir: '/Personal-Page/',
        head: {
            link: [{ rel: 'icon', type: 'image/x-icon', href: '/Personal-Page/favicon.ico' }]
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

