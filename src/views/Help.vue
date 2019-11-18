<template>
    <div class="Help">

        <Header />
        <Help />
        <BackToTop />

        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Help from '@/components/Help.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'help',
    components:{
        Header,
        Help,
        BackToTop,
        Footer
    }
}
</script>