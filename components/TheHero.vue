<template>
  <section id="home" class="observe hero">
    <div class="container">
      <h1 class="hero__title">I'm a
        <span class="hero__text hero__text_color_white">Frontend Developer</span>
        <br> specialising in <br>
        <span class="hero__text hero__text_color_main-gradient">Vue</span>
      </h1>
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
}
.hero__title {
  font-weight: 300;
  font-size: 56px;
  text-align: center;
  line-height: 150%;
  letter-spacing: -0.02em;
  color: $textMainColor;
}
.hero__text_color_main-gradient {
  font-weight: 600;
  @include main-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.hero__text_color_white {
  color: $textSubColor;
}
.hero__arrow {
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
</style>