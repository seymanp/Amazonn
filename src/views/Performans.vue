<template>
    <div class="login">
        
        
        <Performans/>
        <Footer />
    </div>
</template>

<script>


import Performans from '@/components/Performans.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     
        Performans,
        Footer
    }
}
</script>