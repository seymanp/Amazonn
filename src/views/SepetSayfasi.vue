<template>
    <div class="sepet">
        
        <Header/>
        <Sepet/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Sepet from '@/components/Sepet.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'sepet',
    components:{
        
        Header,
        Sepet,
        BackToTop,
        Footer
    }
}
</script>