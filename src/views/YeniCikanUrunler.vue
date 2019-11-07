<template>
    <div class="login">
        
        
        <YeniCikanUrunler/>
        <Footer />
    </div>
</template>

<script>


import YeniCikanUrunler from '@/components/YeniCikanUrunler.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
     
        YeniCikanUrunler,
        Footer
    }
}
</script>