<template>
  <div id="app">
   <Header />
   <Item />

    
  </div>


</template>

<script>
import Header from './components/Header.vue'
import Item from './components/Item.vue'





export default {
  name: 'app',
  components: {
    
     Header,
     Item   
    

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

