<template>
  <section class="tools">
    <div class="container">
      <h1 class="tools__title">What i <span class="tools__title_color_white">use</span></h1>
      <div class="tools__container">
        <h2 class="tools__subtitle">Development</h2>
        <div class="tools__body">
          <div class="tools__item">
            <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/JavaScript_basics"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/js.svg" alt="js logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://nodejs.org/en/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/nodejs.svg" alt="nodejs logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://nuxt.com/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/nuxt.svg" alt="nuxt logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://vuejs.org/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/vue.svg" alt="vue logo" class="tools__img">
            </a>
          </div>
        </div>
      </div>

      <div class="tools__container">
        <h2 class="tools__subtitle">Layout</h2>
        <div class="tools__body">
          <div class="tools__item">
            <a
                href="https://developer.mozilla.org/en-US/docs/Glossary/HTML5"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/html5.svg" alt="html5 logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/css3.svg" alt="css3 logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://sass-lang.com/guide"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/scss.svg" alt="scss logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://www.figma.com/design/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/figma.svg" alt="figma logo" class="tools__img">
            </a>
          </div>
        </div>
      </div>

      <div class="tools__container">
        <h2 class="tools__subtitle">Web Tools</h2>
        <div class="tools__body">
          <div class="tools__item">
            <a
                href="https://www.npmjs.com/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/npm.svg" alt="npm logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://webpack.js.org/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/webpack.svg" alt="webpack logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://babeljs.io/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/babel.svg" alt="babel logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://eslint.org/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/eslint.svg" alt="eslint logo" class="tools__img">
            </a>
          </div>
        </div>
      </div>

      <div class="tools__container">
        <h2 class="tools__subtitle">Version Control</h2>
        <div class="tools__body">
          <div class="tools__item">
            <a
                href="https://git-scm.com/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/git.svg" alt="git logo" class="tools__img">
            </a>
          </div>
          <div class="tools__item">
            <a
                href="https://github.com/"
                target="_blank"
                class="tools__link"
            >
              <img src="~/assets/img/logos/github.svg" alt="github logo" class="tools__img">
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheToolsAndTechnologies"
}
</script>

<style lang="scss" scoped>
.tools {
  padding: 80px 0 130px;
}
.tools__title {
  font-size: 40px;
  font-weight: 300;
  color: $textMainColor;
}
.tools__subtitle {
  font-size: 32px;
  line-height: 150%;
  font-weight: 600;
  max-width: 520px;
  margin: 0 auto;
  text-align: center;
  @include main-gradient;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.tools__item {
  @include center-content;
  width: 75px;
  cursor: pointer;
  position: relative;
}
.tools__item:hover::before {
  opacity: 1;
  visibility: visible;
}
.tools__item::before {
  content: "";
  width: 100%;
  height: 3px;
  border-radius: 15px;
  @include main-gradient;
  position: absolute;
  bottom: -10px;
  opacity: 0;
  visibility: hidden;
  transition: 0.75s;
}
.tools__link {
  width: 100%;
}
.tools__img {
  width: 100%;
}
.tools__body {
  margin-top: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
}
.tools__container {
  margin: 30px auto;
}
.tools__title_color_white {
  color: $textSubColor;
}
</style>