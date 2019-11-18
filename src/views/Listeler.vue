<template>
    <div class="listeler">
       <Header />
        <ListeListeler />
        <BackToTop />
        <Footer/>
    </div>
</template>

<script>

import Header from '@/components/Header.vue'
import ListeListeler from '@/components/ListeListeler.vue'
import BackToTop from '@/components/BackToTop.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'listeler',
    components:{
        Header,
        ListeListeler,
        BackToTop,
        Footer
    }
}
</script>