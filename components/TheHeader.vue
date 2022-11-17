<template>
  <div class="header">
    <h2 class="header__title">The Header</h2>
    <p class="header__text">Lorem ipsum asdlsdf as;</p>
  </div>
</template>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="scss">
.header {
  width: 50vw;
  height: 300px;
  background-color: aquamarine;
  @include center-content;
  flex-direction: column;

  &__title {
    font-size: 64px;
    color: red;
  }

  &__text {
    font-size: 32px;
    color: $mainColor;
  }
}
</style>