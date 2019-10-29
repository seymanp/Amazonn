<template>
    <div style="width: 1500px; height: 600px;">
        <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1190410_1190410_915468_TR_TrustPage_DesktopHero_1500x600_1569398355_jpg._CB452867548_.jpg">

            </b-carousel-slide>

            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Books/XCM_Manual_1191858_1191858_926937_TR_Oct_Books_DesktopHero_1500x600_1569593328_jpg._CB451119150_.jpg">

            </b-carousel-slide>

            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/Flips/Oct/GW/XCM_Manual_1186547_1186547_TR_SL_Oct_1500x600_1_1568988600_jpg._CB452702173_.jpg">

            </b-carousel-slide>

        </b-carousel>

    </div>
</template>

<script>
    export default {
        data() {
                return {

                }
            }
    }
</script>

<style scoped>
    .cardss {
        margin-top: 60%;
    }
</style>