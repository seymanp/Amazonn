<template>
    <div class="div" >
            <head>
            <title>Google Icons</title>
            <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
            <meta name='viewport' content='width=device-width, initial-scale=1'>
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
                    <p>İhtiyacınız olan bilgileri bulamıyor musunuz?</p>
                    <div style="border: 2px solid #DDD;">
                        <i class='fab fa-sistrix'> </i>
                        <input style="border: none;"/>
                    </div>
                </b-row>

        </div>
        
        <div class="helpSubjectTitle"  ></div>
        <div class="helpSubject"  ></div>
        <div class="subject"  ></div>
        <div class="pic"></div>
    </div>
</template>

<script>

export default {
    
}
</script>


<style  scoped>
.div{
    background-color: white;
}


.message {
    background-color: white;
    color:black;
    border:palevioletred solid 2px;
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
.message .col-md-1{
  border:palevioletred solid 2px;

}
.message .col-md-11{
  border:palevioletred solid 2px;

}
</style>