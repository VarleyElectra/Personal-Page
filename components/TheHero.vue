<template>
  <section id="home" class="observe hero">
    <div class="container">
      <h2 class="hero__title">I'm a
        <span class="key-text">Frontend Developer</span>
        <br> specialised in <br>
        <span class="hero__text hero__text_color_main-gradient">Vue</span>
      </h2>
      <a href="#work" class="hero__arrow"></a>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheHero"
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 400px;

  &__title {
    font-weight: 300;
    font-size: 56px;
    text-align: center;
    line-height: 150%;
    letter-spacing: -0.02em;
    color: $textMainColor;
  }

  &__text_color_main-gradient {
    font-weight: 600;
    @include main-gradient;
    @include text-gradient;
  }

  &__arrow {
    border: none;
    width: 40px;
    height: 40px;
    background: transparent url('/assets/img/arrow.svg') center center no-repeat;
    position: absolute;
    left: 50%;
    bottom: 42px;
    transform: translateX(-50%) rotate(90deg);
    cursor: pointer;
  }
}

@media (max-width: 768px) {
  .hero__title {
    font-size: 35px;
  }
}
</style>