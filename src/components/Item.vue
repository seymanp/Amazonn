<template>
    <div class="Ana">
        <div class="row" id="bas">
            <a href="#">Mutfak</a>
            <p> > </p>
            <a href="#">Sofra</a>
            <p> > </p>
            <a href="#">Eşyaları</a>
            <p> > </p>
            <a href="#"> Yemek ve Çay-Kahve Takımları</a>
            <p> > </p>       
            <a href="#">Yemek Takımları</a>
        
        </div>
        <b-container class="Alt">
            <b-row style="height:1000px;">
                <b-col class="col-md-10">
                    <b-row style="height:500px;">
                        <b-col class="col-md-6">
                            <b-row>
                                <b-col class="col-md-2" style="height:500px;">
                                        <ul style="list-style-type:none; margin-left:-40px; margin-top:5px;">
                                   <button @click="img=img1"> 
                                       <li>

                                        <img alt="Paşabahçe 96138 Lacy 8 Parça Yemek Seti" 
                                            src="https://images-na.ssl-images-amazon.com/images/I/61JK3E1eeuL._AC_SX679_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                   <button @click="img=img2"> 
                                       <li>
                                        <img src="https://images-na.ssl-images-amazon.com/images/I/41cw-HEr93L._AC_SX355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                    
                                     </li>
                                   </button>
                                   <button @click="img=img3"> 
                                       <li>

                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/I/315NogMCJjL._AC_SY355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                   <button @click="img=img4"> 
                                       <li>

                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/I/31k9KpXGqHL._AC_SY355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                   <button @click="img=img5"> 
                                       <li>

                                        <img 
                                            src="https://images-na.ssl-images-amazon.com/images/I/51XlkRNrHsL._AC_SY355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                   <button @click="img=img6"> 
                                       <li>

                                        <img  
                                            src="https://images-na.ssl-images-amazon.com/images/I/616uwusdAKL._AC_SX355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                   <button @click="img=img7"> 
                                       <li>

                                        <img  
                                            src="https://images-na.ssl-images-amazon.com/images/I/81xfCOrDMeL._AC_SY355_.jpg" 
                                            width=50px;
                                            height="50px;"
                                            >
                                     </li>
                                   </button>
                                    
                                </ul>
                                </b-col>
                                <b-col class="col-md-10 " style="height:500px;">
                                    <img alt="Paşabahçe 96138 Lacy 8 Parça Yemek Seti" 
                                            :src="img" 
                                            width=100%;
                                            height=315px;
                                            >
                                    <p> Yakınlaştırmak için imleci görselin üzerine getirin</p>
                                </b-col>
                            </b-row>
                        </b-col>
                        <b-col class="col-md-6">
                            <b-row class="ust-kisim" style="height:100px; border-bottom: 1px solid lightgray;">
                                <b-col>
                                    <b-row class="ust-yazi">
                                        <span style="font-size: 19px!important;">
                                            Paşabahçe 96138 Lacy 8 Parça Yemek Seti
                                        </span>
                                    </b-row>
                                <b-row class="alt-yazi">
                                    <p style="font-size: 13px;">Paşabahçe</p>

                                </b-row>
                                </b-col>
                            </b-row>
                                
                                

                            <b-row style="height:400px;">
                                <b-col class="alt-kisim">
                                    <b-row>
                                        <p style="color: #555!important">Önceki Fiyat: <span style="text-decoration: line-through !important; color: #555;">₺32,14</span> </p>
                                    </b-row>
                                    <b-row>
                                        <p>Günün Fırsatı: <span style="font-size: 19px; font-weight: bold; color: #B12704!important;">₺23,99</span> 4,90 TL Kargo ücreti (50 TL ve üzeri siparişlerde <br> <strong> Kargo BEDAVA</strong>) <a href="#">Ayrıntılar</a> </p>
                                    </b-row>
                                    <b-row>
                                        <p>İndiriminiz:	<span style="font-size: 13px; color: #B12704!important;">₺8,15 (% 25) </span> </p>
                                    </b-row>
                                    <b-row style="margin-left:65px; margin-top: -15px;">
                                        <p>Fiyatlara KDV dahildir.</p>
                                    </b-row>
                                    <b-row>
                                        <a href="">Yeni (1) başlangıç fiyatı:</a>  <span style="font-size: 13px; color: #B12704!important;">₺23,99</span>   + Bedava Kargo
                                    </b-row>
                                    <b-row>
                                        <ul style="margin-bottom: 0; padding-bottom: 0; font-size: 13px; color: #2c3e50; font-weight: 700">
                                            <li>
                                                <p>2 salata kasesi</p>
                                            </li>
                                            <li style="margin-top: -10px;">
                                                <p>6 yemek tabağı</p>
                                            </li>
                                            <li style="margin-top: -10px;">
                                                <p style="margin-left: -25px;">Şık tasarım</p>
                                            </li>
                                            <li style="margin-top: -10px;"> 
                                                <p>Kullanışlı ürün</p>
                                            </li>
                                            
                                        </ul>
                                    </b-row>
                                </b-col>
                            </b-row>
                        </b-col>
                    </b-row >
                    <b-row style="height:500px; ">
                        <b-col>
                            <b-row>
                                <strong style="    color: #C60!important;
    font-size: 16px!important;
    font-family: verdana,arial,helvetica,sans-serif!important;">Bu Ürünü Gördükten Sonra Müşteriler Başka Hangi Ürünleri Alıyor?</strong>
                            </b-row>
                            <b-row style="height:110px">
                                <img src="../assets/resim1.png"
                                        style="width:100%;
                                        height:100%;">
                            </b-row>
                            <b-row style="height:110px">
                                <img src="../assets/resim2.png"
                                        style="width:100%;
                                        height:100%;">
                            </b-row>
                            <b-row style="height:110px">
                                <img src="../assets/resim3.png"
                                        style="width:100%;
                                        height:100%;">
                            </b-row>
                            <b-row style="height:110px">
                                <img src="../assets/resim4.png"
                                        style="width:100%;
                                        height:100%;">
                            </b-row>
                        </b-col>

                    </b-row>
                </b-col>
                <b-col class="col-md-2">
                    <b-row style="height:700px; border:1px solid lightgray; padding:10px;">
                        <b-col style="font-size: 13px!important;
    line-height: 19px!important;     font-family:Arial,sans-serif;">
                            <b-row>
                                <p style="  color: #B12704!important;
                                            font-size: 17px!important;
                                            line-height: 1.255!important;">₺23,99</p>

                            </b-row>
                            <b-row>
                                <p>+ 4,90 TL Kargo ücreti (50 TL ve üzeri siparişlerde <strong>Kargo BEDAVA</strong>) <br> <a href="#" style="margin-left:-90px;">Ayrıntılar</a></p>
                            </b-row>
                            <b-row>
                                <p>Bedava kargo ile <strong> 11 Kasım Pazartesi</strong> tarihinde teslim alın.</p>
                            </b-row>
                            <b-row>
                                <p><strong> 18 saat 8 dakika </strong> içinde sipariş verip ödeme adımında daha hızlı olan teslimatı seçin ve <strong> yarın teslim alın.</strong> <a href="#"> Ayrıntılar </a></p>
                            </b-row>
                            <b-row>
                                <p style="color: #007600!important; font-size: 17px!important;
    line-height: 1.255!important; font-weight:700;">Stokta var.</p>
                            </b-row>
                            <b-row>
                                <p>Miktar:</p>

                                <b-form-select
                                style="width:37px;"
                                class="mb-2 mr-sm-2 mb-sm-0"
                                :value="null"
                                :options="{ '1': '1', '2': '2', '3': '3' , '4': '4', '5': '5', '6': '6', '10': '10', '11': '11', '20': '20', '30': '30', '40': '40', '50': '50'         }"
                                id="inline-form-custom-select-pref"
                                >
                                <template v-slot:first>
                                    <option :value="null">1</option>
                                </template>
                                </b-form-select>
                            </b-row>
                            <b-row>
                                
                                <button style="width:204px; height:30px; background-color:white; border:none; outline:none;">
                                    <img src="../assets/pic_sepeteekle.png"
                                        style="width:100%;
                                        height:100%;">
                                </button>
                            </b-row>
                            <b-row>
                                
                                <button style="width:204px; height:30px; background-color:white; border:none; outline:none;">
                                    <img src="../assets/pic_simdial.png"
                                        style="width:100%;
                                        height:100%;">
                                </button>
                            </b-row>
                            <b-row>
                                <p>Amazon.com.tr tarafından satılır ve gönderilir.</p>
                            </b-row>
                            <b-row style="padding:10px; border-top:1px solid lightgray;">
                                <button style="width:203px; height:28px; border:none">
                                    Listeye Ekle
                                </button>
                            </b-row>
                        </b-col>
                    
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
<strong style="    color: #C60!important;
    font-size: 16px!important;
    margin-left:-500px;
    font-family: verdana,arial,helvetica,sans-serif!important;">Bu Ürünü Gördükten Sonra Müşteriler Başka Hangi Ürünleri Alıyor?</strong>
                            
        <div style="border-top: 1px solid gray">
    <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="white" img-width="1024" img-height="480" style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">

        <!-- Slides with img slot -->
        <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
        <b-carousel-slide>
            <template v-slot:img>
                <div style="text-align: right; background-color: white;">
                    <big>Sayfa 1/2</big>
                </div>
                <br />
                <b-row style="background-color: white;">

                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
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
                </div>
                <br />
                <b-row style="background-color: white;">
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                    <b-col class="wcard">
                        <b-card img-alt="Image" img-top tag="article" style="max-width: 20rem; border: none;" class="mb-2">
                            <a href="#"><img src="https://images-na.ssl-images-amazon.com/images/I/418ERJcf-ML._AA210_.jpg"></a>

                            <b-card-text style="text-align: left;">
                                <b style="background-color: orangered; color: white;">GÜNÜN FIRSATI</b>
                                <br />
                                <big style="color: red;">185,00 TL</big>
                                <br />
                                <small>Fiyat:  <del>262,34 TL</del> (%29 indirim) </small>
                                <br />
                                <small>Kalan süre:</small>
                                <br />
                                <a href="#">Ventoso TR EPS31903 Titanyum Kaplı Profesyonel Saç Maşası 32 ...</a>
                                <br />
                                <small>Amazon.com.tr tarafından satılır ve gönderilir</small>
                                <br />
                            </b-card-text>

                            <b-button href="#" variant="primary" style="background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: black;">Sepete Ekle</b-button>
                        </b-card>
                    </b-col>
                </b-row>
            </template>
        </b-carousel-slide>

    </b-carousel>
</div>


    <strong style="    color: #C60!important;
    font-size: 16px!important;
    margin-left:-850px;
    font-family: verdana,arial,helvetica,sans-serif!important;">Ürün Bilgileri
</strong>

<p style="color:black;  margin-left:-850px;">Teknik Ayrıntılar</p>

 <img src="../assets/bilgi.png"
                                        style="width:100%;
                                        height:100%;">

    <b-container style="border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; text-align: left;">
        <b-row>
            <h3 style="color: #CC6600;">Ürün Açıklaması</h3>
        </b-row>
        <b-row><p style="margin-left: 8%;">Soda camından imal edilmiştir.</p></b-row>
    </b-container>

    <b-container style="border-bottom: 1px solid lightgray;">
        <b-row>
            <h3 style="color: #CC6600;">Üreticiden</h3>

        </b-row>
        <b-row><img height="300" width="970" src="https://m.media-amazon.com/images/S/aplus-media/vc/2e1822ce-8732-4575-bb22-6ce58762386d._SR970,300_.jpg" alt="" style="width: 100%; height: auto;"></b-row>
        <b-row style="margin-top: 15px;">
            <b-col class="col-md-4">
                <img width="300" height="300" src="https://m.media-amazon.com/images/S/aplus-media/vc/685ad9ea-892a-4572-9dff-4241d0656db0._SR300,300_.jpg" alt="">
            </b-col>
            <b-col class="col-md-8" style="margin-top: 10%; text-align: left;">
                <b-row><h3 style="font-weight: bold; font-size: 17px;">Masalarınızda dantele yer açın</h3></b-row>
                <b-row><p style="font-size: 13px;">Nostajik Lacy serisi koleksiyonun özelliği dantel desenlerinden esinlenerek tasarlanmış ve incelikle üretilmiş şeffaf gravürlü tasarımı, bize çok tanıdık gelen ve geçmişi hatırlatan desenleriyle tabakların ve kaselerin yüzeylerine uyarlanmıştır.</p></b-row>
            </b-col>
        </b-row>

        <b-row>
            <b-col class="col-md-8" style="margin-top: 10%;">
                <b-row>
                    <h3 style="font-weight: bold; font-size: 17px;">Lacy camın parlaklığı ve ışıltısıyla tek tıkla kapınızda</h3>
                </b-row>
                <b-row><p style="font-size: 13px; text-align: left;">Koleksiyonda yemeklerinizi servisi için 6 adet servis tabağı ve 2 adet servis kasesi bulunmaktadır. Lacy serisinin camın parlaklığı ve ışıltısıyla hem yemeklerinize hem sofralarınıza değer katabilirsiniz.Lacy'nin nostajik gravürleriyle yeni deneyimler kazanın.</p></b-row>
            </b-col>
            <b-col class="col-md-4">
                <img width="300" height="300" src="https://m.media-amazon.com/images/S/aplus-media/vc/10c7544f-e668-4283-899f-541a015e6323._SR300,300_.jpg" alt="">
            </b-col>
        </b-row>
    </b-container>

    <b-container  style="width: 400px; margin-left: -10px; margin-top: 15px;">
        <b-col >
            <b-row><h3 style="margin-left: 14px; color: black;">Müşteri Yorumu Yok</h3></b-row>
            <b-row>
                <b-col class="col-md-3" style="font-size: 13px; margin-right: -30px;">5 Yıldız</b-col>
                <b-col class="col-md-5">
                    <input type="text" disabled name="" id="">
                </b-col>
                <b-col class="col-md-4" style="font-size: 13px;"><p style="margin-left: 35px;">0%</p></b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-3" style="font-size: 13px; margin-right: -30px;">5 Yıldız</b-col>
                <b-col class="col-md-5">
                    <input type="text" disabled name="" id="">
                </b-col>
                <b-col class="col-md-4" style="font-size: 13px;"><p style="margin-left: 35px;">0%</p></b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-3" style="font-size: 13px; margin-right: -30px;">5 Yıldız</b-col>
                <b-col class="col-md-5">
                    <input type="text" disabled name="" id="">
                </b-col>
                <b-col class="col-md-4" style="font-size: 13px;"><p style="margin-left: 35px;">0%</p></b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-3" style="font-size: 13px; margin-right: -30px;">5 Yıldız</b-col>
                <b-col class="col-md-5">
                    <input type="text" disabled name="" id="">
                </b-col>
                <b-col class="col-md-4" style="font-size: 13px;"><p style="margin-left: 35px;">0%</p></b-col>
            </b-row>
            <b-row>
                <b-col class="col-md-3" style="font-size: 13px; margin-right: -30px;">5 Yıldız</b-col>
                <b-col class="col-md-5">
                    <input type="text" disabled name="" id="">
                </b-col>
                <b-col class="col-md-4" style="font-size: 13px;"><p style="margin-left: 35px;">0%</p></b-col>
            </b-row>

        </b-col>
    </b-container>

    <b-container style="border-top: 1px solid lightgray; border-bottom: 1px solid lightgray; width: 300px; margin-left: 10px; margin-top: 15px;">
        <b-row>
            <h3 style="font-size: 17px; color: black; font-weight: bold; margin-top: 15px;">Bu ürünü incele</h3>
        </b-row>
        <b-row>
            <p style="font-size: 13px; color: black;">Düşüncelerinizi diğer müşteriler ile paylaşın </p>
        </b-row>
        <b-row>
            <button class="musteri-btn">Müşteri Yorumu Yazın</button>
        </b-row>
    </b-container>
         
    </div>
</template>

<style scoped>

.musteri-btn{
    width: 300px; height: 30px; background-color: #e7e9ec;
    border: 1px solid #A2A6AC;
}

.musteri-btn:hover{
    width: 300px; height: 30px; background-color: #A2A6AC;
}



.wcard{
    width: 20px;
}
.Ana{
    background-color: white;
}
.Ana #bas{
    background-color:white;
    margin-left:10px;
    color: #555;}
  .Ana #bas a{
    
color: #767676!important;
font-size: 12px!important;
margin-top: 10px;
    }
    .Ana #bas p{
    
color: #767676!important;
font-size: 12px!important;
margin-top: 10px;
    }
.left{
    text-align: left;
}
</style>

<script>
export default {
    
    data(){
return {
    img:('https://images-na.ssl-images-amazon.com/images/I/61JK3E1eeuL._AC_SX679_.jpg'),
    img1:( 'https://images-na.ssl-images-amazon.com/images/I/61JK3E1eeuL._AC_SX679_.jpg'),
    img2:('https://images-na.ssl-images-amazon.com/images/I/41cw-HEr93L._AC_SX355_.jpg'),
    img3:('https://images-na.ssl-images-amazon.com/images/I/315NogMCJjL._AC_SY355_.jpg'),
    img4:('https://images-na.ssl-images-amazon.com/images/I/315NogMCJjL._AC_SY355_.jpg'),
    img5:('https://images-na.ssl-images-amazon.com/images/I/31k9KpXGqHL._AC_SY355_.jpg'),
    img6:('https://images-na.ssl-images-amazon.com/images/I/51XlkRNrHsL._AC_SY355_.jpg'),
    img7:('https://images-na.ssl-images-amazon.com/images/I/81xfCOrDMeL._AC_SY355_.jpg')
}
    }
}
</script>