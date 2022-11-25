<template>
  <section id="work" class="observe works">
    <div class="container works__container">
      <h2 class="container__title">My <span class="key-text">Projects</span></h2>
      <div class="works__body">
        <div class="works__card card">
          <div class="card-container">
            <img class="card-container__image" src="@/assets/img/works/work-1.png" alt="work-1 img">
          </div>
          <div class="card__info">
            <span class="card__tag">Front Dev Tools</span>
            <div class="card__text">A visual interface of the site can help you in generating HTML&CSS code.
              <span class="key-text">Make it easier!</span>
            </div>
            <div class="card__category">Web Site</div>
            <a href="https://varleyelectra.github.io/Front-Dev-Tools/" class="card__button" target="_blank">
              View work
            </a>
          </div>
        </div>
        <div class="works__card card">
          <div class="card-container">
            <img class="card-container__image" src="@/assets/img/works/work-2.png" alt="work-2 img">
          </div>
          <div class="card__info">
            <span class="card__tag">Connect Game</span>
            <div class="card__text">Connect a certain number of blocks of the same color with rectangular lines to
              <span class="key-text">win!</span>
            </div>
            <div class="card__category">Javascript Game</div>
            <a href="https://varleyelectra.github.io/Connect-Game/" class="card__button" target="_blank">
              View work
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "TheWorks"
}
</script>

<style lang="scss" scoped>
.works {
  &__body {
    margin-top: 95px;
  }
}

.card {
  display: flex;
  gap: 32px;

  &:not(:last-child) {
    margin-bottom: 95px;
  }

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  &-container {
    overflow: hidden;
    flex: 0 0 50%;
  }

  &-container__image {
    max-width: 100%;
    border-radius: 16px;
  }

  &__info {
    flex: 1 1 auto;
    align-self: flex-end;
  }

  &__tag {
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: $textSubColor;
    margin-bottom: 16px;
    @include main-gradient;
    @include text-gradient;
  }

  &__text {
    font-weight: 300;
    font-size: 32px;
    line-height: 150%;
    color: $textMainColor;
    margin-bottom: 24px;
  }

  &__category {
    font-size: 18px;
    color: $textSubColor;
  }

  &__button {
    display: inline-block;
    margin-top: 32px;
    padding: 10px 20px 10px 20px;
    border: 1px solid $textMainColor;
    border-radius: 100px;
    color: $textSubColor;
    text-decoration: none;
    position: relative;
  }

  &__button:hover {
    @include main-gradient;
    border: 1px solid $mainBgColor;
    color: $mainBgColor;
  }
}


@media (max-width: 768px) {
  .card {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  .card:nth-child(even) {
    flex-direction: column;
  }

  .card-container {
    width: 80%;
  }
}
@media (max-width: 576px) {
  .card__text {
    font-size: 24px;
    margin-top: 10px;
  }
}
</style>