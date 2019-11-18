<template>
    <div class="div" >
            <head>
            <title>Google Icons</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <meta name='viewport' content='width=device-width, initial-scale=1'>
              <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
            </head>

            <div class="message" >
                <div >

                    <b-row class="message2" >
                        <b-col class="col-md-1" >
                                <div>
                                    <i class="material-icons" style="font-size:50px;">&#xe002;</i>
                                </div>
                        </b-col>
                        <b-col class="col-md-11" >
                            <div>
                                <h1>Amazon'dan beklenmedik bir e-posta mesajı mı aldınız?</h1>
                                <p>Bilginiz dahilinde olmayan bir sipariş hakkında bir e-posta aldıysanız, 
                                lütfen Hesabım alanından
                                <router-link to="/login">
                                    <a>Siparişlerim </a>
                                </router-link> bölümünü kontrol edin. 
                                Söz konusu siparişi burada göremiyorsanız, bu e-posta Amazon.com.tr tarafından gönderilmemiş demektir.
                                Lütfen bu tür e-postalarda verilen hiçbir bağlantıya tıklamayın. 
                                Şüpheli bir mesajı bize bildirmek için lütfen mesajı 
                                <a href="#"> stop-spoofing@amazon.com </a> 
                                adresine yönlendirin 
                                ve ardından mesajı silin. Amazon, web sitemiz dışında (örneğin havale isteğinde bulunma ya da kredi kartı 
                                bilgilerini talep etme gibi) herhangi bir yolla sizden kişisel bilgilerinizi paylaşmanızı veya bir 
                                ödeme yapmanızı asla istemez. Güvenli online alışverişe ilişkin ipuçları için 
                                <a href="#"> yardım sayfalarımızı </a>
                                ziyaret edebilir ve kimlik avı e-posta mesajları hakkındaki kısa 
                                <a href="#">Yardım videomuzu </a> izleyebilirsiniz.</p>
                            </div>
                        </b-col>
                    </b-row>
                </div>
            </div>


        <div class="greyRegionTitle"  >
            <h1>
                Müşteri Hizmetleri
            </h1>
        </div>
        <div class="greyRegion"  >

                <b-row >
                    <b-col class="col-md-1"> <!-- BOŞLUK --> </b-col>
                    <b-col class="col-md-4">
                        <b-row>
                            <b-col>
                                <img alt="Siparişlerim" 
                                src="https://images-na.ssl-images-amazon.com/images/G/41/x-locale/cs/help/images/gateway/Box-t3._CB494634861_.png">
                            </b-col>
                            <b-col>
                                <a href="#"> Siparişlerim</a>
                                <ul>
                                    <li> Kargonuzu takip edin</li>
                                    <li>Teslim edilmeyen paketleri bildirin</li>
                                    <li>Ürünleri iade edin</li>
                                    
                                </ul>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <img alt="Ödeme Seçenekleri" 
                                src="https://images-na.ssl-images-amazon.com/images/G/41/x-locale/cs/help/images/gateway/Payments_clear-bg-t3._CB494646762_.png">
                            </b-col>
                            <b-col>                                
                                <a href="#"> Ödeme Seçenekleri</a>
                                <ul>
                                    <li> Ödeme araçlarını yönetin</li>
                                    <li>Hediye kartı bakiyenizi görüntüleyin</li>                                    
                                </ul>
                               
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="col-md-1"><!-- BOŞLUK --></b-col>
                    <b-col class="col-md-4"> 
                        <b-row>
                            <b-col>
                                <img alt="İadeler ve Para İadeleri" 
                                src="https://images-na.ssl-images-amazon.com/images/G/41/x-locale/cs/help/images/gateway/returns-box-blue._CB494636164_.png">
                            </b-col>
                            <b-col>
                                <a href="#"> Para İadeleri</a>
                                <ul>
                                    <li> Ürünleri iade edin veya değiştirin</li>
                                    <li>İade posta etiketlerini yazdırın</li>                                    
                                </ul>
                                
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <img alt="Hesap Ayarları" 
                                src="https://images-na.ssl-images-amazon.com/images/G/41/x-locale/cs/help/images/gateway/IN-your-account._CB494647216_.png">
                            </b-col>
                            <b-col>
                               <a href="#"> Hesap Ayarları</a>
                                 <ul>
                                    <li> E-postanızı veya şifrenizi değiştirin</li>
                                    <li>Giriş bilgilerinizi güncelleyin</li>                                    
                                </ul>
                            </b-col>
                        </b-row>
                    </b-col>
                    <b-col class="col-md-2"><!-- BOŞLUK --></b-col>
                </b-row>
                <b-row>
                    <!-- arama butonu -->
                    <div>
                        <ul style="list-style-type:none;">
                            <li> <p style=" font-weight: 700;
                                            font-size: 28px;
                                            line-height: 1.2;
                                            color: #111;
                                            position: relative;
                                            margin:10px 124px 0 0 6px;
                                            padding: 14px 18px 14px 62px;
                                            text-align: left;"> İhtiyacınız olan bilgileri bulamıyor musunuz? </p>  
                            </li>
                            
                            <li > 
                                <div id="buton" style="border: 2px solid #DDD;" > 
                                    <i class="fa fa-search" style="font-size:25px; color:grey;" > </i>
                                    <input style="border: none; font-size:25px;"/>        
                                                            
                                </div>
                                
                               
                            </li> 
                            
                        </ul>
                     
                    </div>
                    <button id="btn_Git">Git</button> 
                </b-row>

        </div>
        
        <div class="greyRegionTitle"  >
            <h1>Yardım konularına göz atın</h1>
        </div>


        <div class="helpSubject"  >
            <b-row>
                <b-col>
                <div id=menu>
                    <ul>
                        <li> <p>Önerilen Konular</p>
                                <ul class="yamur">
                                    <li class="butlook" id="OnerilenKonular">
                                        <b-row>
                                            <b-col>
                                                <div id="ol" >
                                                    <p> Şunları nasıl yapacağınızı öğrenin:</p>
                                                    <a href="#">Fatura Yazdırma<br /> </a>
                                                    <a href="#">Bir E-postanın Amazon'dan Gönderilip Gönderilmediğini Belirleme Hakkında <br /></a>
                                                    <a href="#"> Amazon Ödeme Araçları Hakkında</a>
                                                </div>
                                            </b-col>
                                            <b-col>
                                                 <div id="ol" >
                                                    <p>Hızlı Çözümler</p>
                                                    <a href="#">Kargonuzu Takip Edin veya Siparişinizi Görüntüleyin<br /> </a>
                                                    <a href="#">Ödeme Araçlarınızı Yönetin <br /></a>
                                                    <a href="#"> Ürünleri İade Edin veya Değişiklik Talebinde Bulunun</a>
                                                    <a href="#"> İsminizi, E-posta Adresinizi veya Şifrenizi Değiştirin</a>
                                                    <a href="#"> Adres Defterinizi Yönetin</a>
                                                </div>
                                            </b-col>
                                        </b-row>


                                    </li>
                                </ul>

                        </li>
                        <li>Gönderim ve Teslimat 
                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Gönderim ve Teslimat</p>
                                            <a href="#" >Kargonuzu Takip Edin <br /> </a>
                                            <a href="#" >Kargo Şirketi İletişim Bilgileri Hakkında<br /></a>
                                           <a href="#" > Pazaryeri Teslimat Ücretleri ve Süreleri<br /></a>
                                           <a href="#" > <br /></a>
                                            <a href="#" > <a style="color:red"> › </a> Gönderim ve Teslimat Sayfasında Daha Fazla Bilgi Alın</a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>
                        </li>
                        



                        <li>Hesap Yönetimi
                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Hesap Yönetimi</p>
                                            <a href="#" >Ödeme Araçları Ekleyin ve Yönetin <br /> </a>
                                            <a href="#" >Hesap Oluşturma Hakkında<br /></a>
                                           <a href="#" > Adres Ekleyin ve Yönetin<br /></a>
                                           <a href="#" > <br /></a>
                                            <a href="#" > <a style="color:red"> › </a>Hesap Yönetimi Sayfasında Daha Fazla Bilgi Alın</a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>
                        </li>
                        




                        <li>Ödemeler
                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Ödemeler</p>
                                            <a href="#" >Kredi Kartıyla Ödeme Hakkında <br /> </a>
                                            <a href="#" >Fatura Yazdırma<br /></a>
                                           <a href="#" > <br /></a>
                                            <a href="#" > <a style="color:red"> › </a>Ödemeler Sayfasında Daha Fazla Bilgi Alın</a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>
                        </li>

                    
                        <li>İadeler ve Para İadeleri

                             <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>İadeler ve Para İadeleri</p>
                                            <a href="#" >Sipariş Ettiğiniz Ürünleri İade Edin<br /> </a>
                                            <a href="#" >İade Koşullarımız Hakkında<br /></a>
                                            <a href="#" >İade Faturaları Hakkında<br /></a>
                                           <a href="#" > İadeler Hakkında<br /></a>
                                           <a href="#" > <br /></a>
                                            <a href="#" > <a style="color:red"> › </a> İadeler ve Para İadeleri Sayfasında Daha Fazla Bilgi Alın</a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>
                        </li>

                        <li>Sipariş Verme
                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Sipariş Verme</p>
                                            <a href="#" >Pazaryeri Satıcısından Sipariş Verme Hakkında<br /> </a>
                                            <a href="#" >A'dan Z'ye Garanti<br /></a>
                                           <a href="#" > <br /></a>
                                            <a href="#" > <a style="color:red"> › </a>Sipariş Verme Sayfasında Daha Fazla Bilgi Alın</a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>

                        </li>

                        <li>Diğer Konular ve Yardım Sayfaları
                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Diğer Konular ve Yardım Sayfaları</p>
                                            <a href="#" >Hediyeler ve Hediye Kartları<br /> </a>
                                            <a href="#" >Güvenlik ve Gizlilik<br /></a>
                                           <a href="#" > <br /></a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>
                        </li>


                        <li>Daha fazla yardıma ihtiyacınız var mı?

                            <ul class="yamur">
                                <b-row>
                                    <b-col> 
                                        <li class="butlook">
                                        <div id="ol" >
                                            <p>Daha fazla yardıma ihtiyacınız var mı?</p>
                                            <a href="#" >Şifrenizi Sıfırlama<br /> </a>
                                            <a href="#" >Bize Ulaşın<br /></a>
                                           <a href="#" > <br /></a>
                                        </div>
                                        </li>
                                </b-col>
                                    <b-col>
                                        <!-- BOŞLUK-->
                                    </b-col>
                                </b-row>
                                <b-row>
                                    <b-col>
                                          <!-- BOŞLUK-->
                                    </b-col>
                                    <b-col> 
                                         <!-- RESİM-->

                                         <p><img class="csg-hb-promo" 
                                         src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-14B0880C-FE88-49DC-8E4A-800AC4CF5E90_tr-TR.png">
                                         </p>
                                    </b-col>
                                </b-row>
                               
                            </ul>

                        </li>
                    </ul>
                        </div>
                </b-col>
                <b-col></b-col>
            </b-row>
        </div>
        <div class="subject"  >
            
        </div>
        <div class="pic" style="text-align:center;">
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/support_images/GUID-2DD49A42-1CEA-477B-90B0-9D6F47337A62_tr-TR.jpg">
        </div>
    </div>
</template>
<script src='https://kit.fontawesome.com/a076d05399.js'></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
<script>

export default {
    methods:{
        Open(){
            document.getElementById("OnerilenKonular").style.width="700px";
        }
    }
    
}
</script>


<style  scoped>
.div{
    background-color: white;
}


.message {
    background-color: white;
    color:black;
  border:sienna solid 2px;
    border-radius: 4px;
    position: relative;
  
    font-family: "Amazon Ember",Arial,sans-serif;
    font-size: 13px;
    box-shadow: 0 0 0 4px #fffae7 inset;
     margin:0  124px 6px;
    padding: 14px 18px 14px 62px;
}
.greyRegion{
    font-size: 12px;
    text-align: left;
    background-color: ivory;
    border-top:1px solid rgb(176, 192, 207);
    border-bottom:1px solid rgb(176, 192, 207);
}
.greyRegion a{
    font-size: 19px;
        font-weight: 700!important;
}
.div .greyRegionTitle{
    font-weight: 400;
    font-size: 28px;
    line-height: 1.2;
    color: #111;
       position: relative;
     margin:10px 124px 0 0 6px;
    padding: 14px 18px 14px 62px;
    text-align: left;
}

#buton li:hover {
border: 2px solid orangered;
}

#btn_Git{
    width: 147px;
    height: 43px;
    padding: 1px 6px;
    margin-top:78px;
    margin-left:100px;
    background-color: dimgrey;
    color:white;
    font-size: 100%;
    vertical-align: middle;
    border-radius: 10%;
    z-index: 20;
}
.helpSubject{
    margin: 10px 100px 10px;
}
    #menu {
        width: 260px;
        height: 328px;
        padding:12px o 19px 16px; 
        background: #eee;
    }
    #menu ul{
        list-style: none;
        text-align: left;
        text-decoration: none;
        cursor: default;
        font-size: 15px;
        line-height: 26px;
        text-indent: -5px;
        font-family: "Amazon Ember",Arial,sans-serif;
        font-weight: 500px;
        color:black;
    }
    #menu ul li{
        padding: 2px 0;
    }
#menu ul {
    list-style: none; 
    margin: 0; 
    padding: 0;
    }
#menu li {
    position: relative;
    }
  
#menu ul ul {
      /*  lileri yanına getiriyo  */
    position: absolute; 
    top: 0; 
    left: 100%; 
    width: 100%;
    }
#menu ul ul {
    /* gelen lilerin sonradan gitmesini sağlıyo */
    display: none;
    }
    
#menu ul li:hover ul {
    /* üzerine gelince liler geliyo */
    display: block;
    } 

.butlook {
width:700px;
height:328px;
display: block; 
border-width: 1px; 
border-style: solid; 
border-color: #ddd; 
margin: 0; 
padding: 3px 3px; 
font-size: 12px; 
font-family: tahoma;
}



#ol{
     list-style: none;
        text-align: left;
        text-decoration: none;
        cursor: default;
        font-size: 15px;
        line-height: 26px;
        text-indent: -5px;
        font-family: "Amazon Ember",Arial,sans-serif;
        font-weight: 500px;
        color:black
}
 
</style>