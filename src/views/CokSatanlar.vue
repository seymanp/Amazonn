<template>
    <div class="login">
        
        
        <CokSatanlar/>
        <Footer />
    </div>
</template>

<script>


import CokSatanlar from '@/components/CokSatanlar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     
        CokSatanlar,
        Footer
    }
}
</script>