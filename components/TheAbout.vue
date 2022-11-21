<template>
  <section id="about" class="observe about">
    <div class="container about__container">
      <div class="about__info">
        <h2 class="about__title">A bit about me</h2>
        <div class="about__text">
          I am a frontend developer who is passionate about <span>creating
          beautiful and useful projects.</span> Besides development, I love play video games,
          study something new and watch cybersport.
        </div>
      </div>
      <div class="about__gallery">
        <div class="about__img"><img src="@/assets/img/about/study.png" alt=""></div>
        <div class="about__img"><img src="@/assets/img/about/game.png" alt=""></div>
        <div class="about__img"><img src="@/assets/img/about/cybersport.png" alt=""></div>
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
  padding: 75px 0;
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
  margin-top: 10px;
}
.about__text span {
  color: $textSubColor;
  font-weight: 600;
}
.about__title {
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: $textSubColor;
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
</style>