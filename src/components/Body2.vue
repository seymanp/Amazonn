<template>
    <div>
        <div class="scrollmenu">
            <div class="row" style="padding: 20px;">
                <a id="amazon-text" style="   font-size: 13px;
		line-height: 19px; text-size:50px;color: black; font-family:Arial,sans-serif;font-size: 21px!important;
		line-height: 27.3px!important;
		">Amazon'da keşfet</a>
                <a href="#" style="font:21px;color: blue; font-family:Arial,sans-serif;font-weight: 400;
		">Tüm Katagoriler</a>

            </div>

            <ul class="row" style="width: 4250px;">
                <li v-for="(Body2,index) in Urunler" :key="index" >
                    <a href=""><img v-bind:src="Body2.image">
                    </a>
                </li>
                

            </ul>
        </div>

    </div>
</template>

<script>
const API_URL="http://localhost:7000/home"
export default {

    data:() =>({
       
       Urunler:[]
   
    }),

    mounted() {

        fetch(API_URL)
        .then(response=>response.json())
        .then(result=> {
            this.Urunler=result.Body2;
            /* eslint-disable */
            console.log(this.Urunler)
        } )
        
    }
    
}
</script>
<style scoped>
    div.scrollmenu {
        background-color: white;
        overflow: auto;
        white-space: nowrap;
    }
    
    div.scrollmenu a {
        display: inline-block;
        color: white;
        text-align: center;
        padding: 14px;
        text-decoration: none;
    }
    
    div.scrollmenu a:hover {
        background-color: white;
    }
    
    ul li {
        list-style-type: none;
        border-radius: 50%;
    }
    
    ul li a {
        list-style-type: none;
        border-radius: 50%;
    }
    
    #amazon-text:hover {
        background-color: white;
    }
</style>