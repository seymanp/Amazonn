<template>
    <div class="login">
        
        <Header/>
        <CokSatanlar/>
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import CokSatanlar from '@/components/CokSatanlar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Header,
        CokSatanlar,
        Footer
    }
}
</script>