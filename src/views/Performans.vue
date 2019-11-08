<template>
    <div class="login">
        
        <Header/>
        <Performans/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Performans from '@/components/Performans.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Header,
        Performans,
        Footer
    }
}
</script>