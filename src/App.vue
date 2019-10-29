<template>
  <div id="app">
   <Header />
    <Slider />
    <Body1 class="Body1" />
    <Body2 class="Body2" />
    <Body3 class="Body3" />
    <Body4 class="Body4" />
    <Body5 class="Body5" />
    <Body6 class="Body6" />
    <Body7 class="Body7" />
    <Body8 class="Body8" />
    <Body9 class="Body9" />
    <Body10 class="Body10" />
    <Footer class="Footer" />

  -->
    
  </div>


</template>

<script>
import Header from './components/Header.vue'
import Slider from './components/Slider.vue'
import Body1 from './components/Body1.vue'
import Body2 from './components/Body2.vue'
import Body3 from './components/Body3.vue'
import Body4 from './components/Body4.vue'
import Body5 from './components/Body5.vue'
import Body6 from './components/Body6.vue'
import Body7 from './components/Body7.vue'
import Body8 from './components/Body8.vue'
import Body9 from './components/Body9.vue'
import Body10 from './components/Body10.vue'


import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    
     Header,
    Slider,
    Body1,
    Body2,
    Body3,
    Body4,
    Body5,
    Body6,
    Body7,
    Body8,
    Body9,
    Body10,
    Footer,
    

  }
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

