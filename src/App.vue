<template>
  <div id="app">
      <router-view> </router-view>
      <!-- <GununFirsatlari1 /> -->
  </div>


</template>

<script>

import GununFirsatlari1 from '@/components/GununFirsatlari1.vue'

export default {
  GununFirsatlari1,
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
  background-color: rgb(197, 197, 197);
}

</style>

