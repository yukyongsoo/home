<template>
  <v-img src="assets/section.jpg" :aspect-ratio="16/10">
    <v-layout column align-center justify-center fill-height>
       <transition appear name="fade">
        <h3 class="display-1 text-xs-center" style="animation-duration: 15s">홈페이지 교체 중!!!</h3>
      </transition>
      <transition appear name="fade">
        <h1 class="display-2 mb-5 text-xs-center" style="animation-duration: 5s">Development has never been easier</h1>
      </transition>
      <transition appear name="fade">
        <h3 class="display-1 text-xs-center" style="animation-duration: 15s">But We Can</h3>
      </transition>
    </v-layout>
  </v-img>
</template>

<script>
module.exports = {};
</script>

<style>
</style>