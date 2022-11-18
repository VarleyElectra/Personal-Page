<template>
    <h1 :style="{color: appConfig.theme.colors.primary}">Test text</h1>
<!--    <img src="~/assets/img/cards/card-1.png" alt="Discover Nuxt 3" />-->
    <TheHeader />
    <TheHero />
    <TheTools />
    <TheWorks />
<!--    <NuxtWelcome />-->
<!--    <TheFooter />-->
</template>

<script>
export default {
  mounted() {
    const root = document.querySelector('#__nuxt')
    const nav = root.querySelector('nav');

    root.querySelectorAll('.observe').forEach(section => {
      console.log('section: ', section)
      new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            nav.querySelectorAll('a').forEach(link => link.classList.remove('active'))
            let id = entry.target.getAttribute('id');
            nav.querySelector(`a[href="#${id}"]`).classList.add('active');
          }
        })
      }, {}).observe(section);
    })
  }
}
</script>

<script setup>
const appConfig = useAppConfig()
</script>