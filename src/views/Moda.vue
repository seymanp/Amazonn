<template>
    <div class="moda">
        
        <Header/>
        <Moda/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Moda from '@/components/Moda.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        Header,
        Moda,
        Footer
    }
}
</script>