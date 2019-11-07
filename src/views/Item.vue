<template>
    <div class="login">
        
        
        <Item/>
        <Footer />
    </div>
</template>

<script>


import Item from '@/components/Item.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     
        Item,
        Footer
    }
}
</script>