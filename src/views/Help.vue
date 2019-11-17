<template>
    <div class="Help">

        <Header />
        <Help />
        <Footer />
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import Help from '@/components/Help.vue'
import Footer from '@/components/Footer.vue'

export default {
    name:'help',
    components:{
        Header,
        Help,
        Footer
    }
}
</script>