<template>
    <div class="login">
        <Header />
        <Accaount />
        <Footer />
    </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Accaount from '@/components/AccaountBody.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'login',
    components:{
        
        Header,
        Footer,
        Accaount
    }
}
</script>