<template>
    <div class="login">
        
        <Header/>
        <Item2/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>


import Header from '@/components/Header.vue'
import Item2 from '@/components/Item2.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     Header,
        Item2,
        BackToTop,
        Footer
    }
}
</script>