<template>
    <TheHeader />
    <TheHero />
    <TheTools />
    <TheWorks />
    <TheAbout />
    <TheFooter />
</template>

<script>
export default {

}
</script>

<script setup>
const appConfig = useAppConfig()
useHead({
  title: `${appConfig.title}`,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
  ],
  meta: [
    { name: 'description', content: `${appConfig.description}` },
    { name: 'Content-Language', content: 'eng' },
    { name: 'Author', content: `${appConfig.author}` },
    { name: 'Copyright', content: `${appConfig.copyright}` },
    { name: 'robots', content: `${appConfig.robots}` },
  ],
})
</script>