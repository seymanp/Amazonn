<template>
    <div class="gun">
        <Header/>
        <GununFirsatlari1 />
       <GununFirsatlari2 />
       <GununFirsatlari3 />  
       <GununFirsatlari42 />
       <GununFirsatlari5 />
       <BackToTop />

          <Footer />

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
 import GununFirsatlari1 from '@/components/GununFirsatlari1.vue'
 import GununFirsatlari2 from '@/components/GununFirsatlari2.vue'
 import GununFirsatlari3 from '@/components/GununFirsatlari3.vue'
import GununFirsatlari42 from '@/components/GununFirsatlari42.vue'
import GununFirsatlari5 from '@/components/GununFirsatlari5.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'gun',
    components:{
        
        Header,
         GununFirsatlari1,
  GununFirsatlari2,
   GununFirsatlari3,
   GununFirsatlari42,
   GununFirsatlari5,
   BackToTop,
        Footer,
       
    }
}
</script>