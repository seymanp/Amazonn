<template>
    <div class="login">
        
        <Header/>
        
        <CokSatanlar/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import CokSatanlar from '@/components/CokSatanlar.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Header,
        CokSatanlar,
        BackToTop,
        Footer
    }
}
</script>