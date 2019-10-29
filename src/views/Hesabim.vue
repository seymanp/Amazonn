<template>
    <div class="login">
        
        <Accaount />
        <Footer />
    </div>
</template>

<script>

import Accaount from '@/components/AccaountBody.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Footer,
        Accaount
    }
}
</script>