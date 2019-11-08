<template>
    <div class="main-container" style="background-color: white;">
        <div style="text-align: left; padding-left: 20px; background-color: white;"><big>Tümü</big>
        </div>
        <div style="border-top: 1px solid gray">
        <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="0"
        controls
        indicators
        background="white"
        img-width="1024"
        img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
        >
        
        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide >
            <template v-slot:img>
                <div style="text-align: right; background-color: white;">
                    <big>Sayfa 1/2</big>
                </div><br />
            <b-row style="background-color: white;">
                
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                    <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <router-link to = "/item">  <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>
                         </router-link>
                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                    <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                    <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
            </b-row>
            </template>
        </b-carousel-slide>
        <b-carousel-slide>
            <template v-slot:img>
                 <div style="text-align: right; background-color: white;">
                    <big>Sayfa 2/2</big>
                </div><br />
            <b-row style="background-color: white;">
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                    <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
                <b-col class="wcard">
                   <b-card
                            
                          
                            img-alt="Image"
                            img-top
                            tag="article"
                            style="max-width: 20rem; border: none;"
                            class="mb-2"
                        >
                         <a href="#"><img  src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text  style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b><br />
                                <big style="color: red;">185,00 TL</big><br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small><br />
                                <small>Kalan süre:</small><br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a><br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small><br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                </b-col>
            </b-row>
            </template>
        </b-carousel-slide>

        
        </b-carousel>
        </div><br /><br />
    </div>
</template>

<script>

</script>

<style scoped>
 .wcard{
     width: 20px;
 }
</style>