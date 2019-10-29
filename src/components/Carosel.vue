<template>
    <div>


<vueper-slides class="no-shadow" :visible-slides="3" :slide-ratio="1/4" :dragging-distance="70">
  <vueper-slide v-for="img in 9" :key="img" :title="img.toString()"></vueper-slide>
</vueper-slides>

    </div>
</template>
<script>
import { VueperSlides, VueperSlide } from 'vueperslides'

import 'vueperslides/dist/vueperslides.css'


export default {
  components: { VueperSlides, VueperSlide },
  Data(){
     return{ img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg'),
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg') ,
     img: require('https://images-na.ssl-images-amazon.com/images/I/61yUwTpN9wL._AC_UL270_SR270,270_.jpg')     }
        }
        
}



</script>

<style scoped>
</style>

