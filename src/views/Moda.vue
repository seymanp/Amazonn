<template>
    <div class="moda">
        
        <Header/>
        <Moda/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Moda from '@/components/Moda.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        Header,
        Moda,
        BackToTop,
        Footer
    }
}
</script>