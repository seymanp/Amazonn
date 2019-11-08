<template>
    <div class="gun">
        <Header/>
        <GununFirsatlari1 />
       <GununFirsatlari2 />
       <GununFirsatlari3 />  
       <GununFirsatlari4 />
       <GununFirsatlari5 />
          <Footer />

    </div>
</template>

<script>
import Header from '@/components/Header.vue'
 import GununFirsatlari1 from '@/components/GununFirsatlari1.vue'
 import GununFirsatlari2 from '@/components/GununFirsatlari2.vue'
 import GununFirsatlari3 from '@/components/GununFirsatlari3.vue'
import GununFirsatlari4 from '@/components/GununFirsatlari4.vue'
import GununFirsatlari5 from '@/components/GununFirsatlari5.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'gun',
    components:{
        
        Header,
         GununFirsatlari1,
  GununFirsatlari2,
   GununFirsatlari3,
   GununFirsatlari4,
   GununFirsatlari5,
        Footer,
       
    }
}
</script>