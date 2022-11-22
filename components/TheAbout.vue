<template>
  <section id="about" class="observe about">
    <div class="container about__container">
      <div class="about__info">
        <h2 class="container__title">
          About <span class="key-text">Me</span>
        </h2>
        <div class="about__text">
          I am a frontend developer who is passionate about <span class="key-text">creating
          beautiful and useful projects.</span> Besides development, I love play video games,
          study something new and watch cybersport.
        </div>
      </div>
      <div class="about__gallery">
        <div class="about__img"><img src="@/assets/img/about/study.png" alt="Study image"></div>
        <div class="about__img"><img src="@/assets/img/about/game.png" alt="Game image"></div>
        <div class="about__img"><img src="@/assets/img/about/cybersport.png" alt="Cybersport image"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheAbout"
}
</script>

<style lang="scss" scoped>
.about {

}
.about__container {
  display: flex;
  align-items: center;
  gap: 20px;
}
.about__text {
  font-size: 32px;
  line-height: 150%;
  color: $textMainColor;
  font-weight: 300;
  margin: 40px 0;
}
.about__gallery {
  flex: 0 0 50%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, 1fr);
  gap: 20px;
}
.about__img {
  border-radius: 10px;
  overflow: hidden;
}
.about__img img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
.about__img:nth-child(1) {
  grid-column: 1/2;
  grid-row: 2/4;
}
.about__img:nth-child(2) {
  grid-column: 2/3;
  grid-row: 1/3;
}
.about__img:nth-child(3) {
  grid-column: 2/3;
  grid-row: 3/5;
}

@media (max-width: 992px) {
  .about__container {
    flex-direction: column;
  }
}
@media (max-width: 576px) {
  .about__text {
    font-size: 24px;
  }
}
</style>