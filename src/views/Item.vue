<template>
    <div class="login">
        
        <Header/>
        <Item/>
        <Footer />
    </div>
</template>

<script>


import Header from '@/components/Header.vue'
import Item from '@/components/Item.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     Header,
        Item,
        Footer
    }
}
</script>