<template>
    <div class="login">
        
        <Header/>
        <Performans/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Performans from '@/components/Performans.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Header,
        Performans,
        BackToTop,
        Footer
    }
}
</script>