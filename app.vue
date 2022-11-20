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
  mounted() {
    const root = document.querySelector('#__nuxt')
    const nav = root.querySelector('nav');

    root.querySelectorAll('.observe').forEach(section => {
      new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
            let id = entry.target.getAttribute('id');
            nav.querySelector(`a[href="#${id}"]`).classList.add('active');
          }
        })
      }, {
        threshold: 0.5,
      }).observe(section);
    })
  }
}
</script>

<script setup>
const appConfig = useAppConfig()
useHead({
  title: `${appConfig.title}`,
  meta: [
    { name: 'description', content: `${appConfig.description}` },
    { name: 'Content-Language', content: 'eng' },
    { name: 'Author', content: `${appConfig.author}` },
    { name: 'Copyright', content: `${appConfig.copyright}` },
    { name: 'robots', content: `${appConfig.robots}` },
  ],
})
</script>