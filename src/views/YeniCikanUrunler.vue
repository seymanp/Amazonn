<template>
    <div class="login">
        
        <Header/>
        <YeniCikanUrunler/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>


import Header from '@/components/Header.vue'
import YeniCikanUrunler from '@/components/YeniCikanUrunler.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     Header,
        YeniCikanUrunler,
        BackToTop,
        Footer
    }
}
</script>