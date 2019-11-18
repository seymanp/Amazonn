<template>
    <div class="login">
        
        <Header/>
        <Item/>
        <BackToTop/>
        <Footer />
    </div>
</template>

<script>


import Header from '@/components/Header.vue'
import Item from '@/components/Item.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     Header,
        Item,
        BackToTop,
        Footer
    }
}
</script>