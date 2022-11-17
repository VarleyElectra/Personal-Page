<template>
  <div>
    <h1 :style="{color: appConfig.theme.colors.primary}">Test text</h1>
    <TheHeader />
    <NuxtWelcome />
    <TheFooter />
  </div>
</template>

<script setup>
import TheFooter from "./components/TheFooter";
import TheHeader from "./components/TheHeader";

const appConfig = useAppConfig()
</script>