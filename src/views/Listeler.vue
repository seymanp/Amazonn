<template>
    <div class="listeler">
        <Header />
        <ListeListeler />
        <Footer/>
    </div>
</template>

<script>


import Header from '@/components/Header.vue'
import ListeListeler from '@/components/ListeListeler.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'listeler',
    components:{
        Header,
        ListeListeler,
        Footer
    }
}
</script>