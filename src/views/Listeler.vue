<template>
    <div class="listeler">
       
        <ListeListeler />
        <Footer/>
    </div>
</template>

<script>


import ListeListeler from '@/components/ListeListeler.vue'
import Footer from '@/components/Footer.vue'
export default {
    name:'listeler',
    components:{
        
        ListeListeler,
        Footer
    }
}
</script>