<template>



<div class="scrollmenu">
        <div class="Ana" >
               
                    <div class="Resim">
                        <div class="a-section al-intro-banner a-spacing-none">
                            
                          
                            <span class="A" >
                                <span >
                                        <a href="#">
                                            <img src="../assets/ListeResim.png" >
                                   
                                        </a>
                                </span>
                            </span>
                        </div>
                    </div>

            


            


            <div id="Listesatır2" >
                <div class="satır1">
                    <div class="row">
                            <div id="kutu1">
                                <div class="row"> 
                                    <div class="a-fixed-left-grid-col a-col-left" >
                                        <img alt="" src="https://m.media-amazon.com/images/G/01/wishlist/intro/list_check_mark._CB461057756_.svg" class="al-intro-benefit-icon">
                                    </div>
                                    <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                                        <h3>Zamandan kazanın</h3>
                                        <span class="a-size-small">Ürünleri ve fikirlerinizi tek bir yerden ve kolayca ekleyin</span>
                                    </div>
                                </div>
                                
                            
                            </div>


                            <div id="kutu2" >
                                <div class="row">  
                                    <div class="a-fixed-left-grid-col a-col-left" >
                                        <img alt="" src="https://m.media-amazon.com/images/G/01/wishlist/intro/gift-box._CB461057756_.svg" class="al-intro-benefit-icon">
                                    </div>
                                    <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                                        <h3>Harika hediyeler verin</h3>
                                        <span class="a-size-small">Arkadaşlarınızın listelerini görün ve kendi listelerinizi paylaşın</span>
                                    </div>
                                </div>
                            
                            </div>
                    </div>
                </div>
                    <div class="satır2">


                        <div id="kutu3" class="a-column a-span6 a-spacing-base">
                            <div class="row"> 
                                
                                    <div class="a-fixed-left-grid-col a-col-left">
                                        <img alt="" src="https://m.media-amazon.com/images/G/01/wishlist/intro/price_drop_graph._CB461057756_.svg" class="al-intro-benefit-icon">
                                    </div>
                                    <div class="a-fixed-left-grid-col a-col-right" style="padding-left:0%;float:left;">
                                        <h3>Fiyat değişikliklerini kontrol edin</h3>
                                        <span class="a-size-small">Listenizdeki ürünlerin fiyatlarının düşüp düşmediğini kontrol edin</span>
                                    </div>
                                
                            </div>
                         
                        </div>
                    </div>
                    <!-- Enabled Features section -->
            </div>




        </div>
          





          <div id="below">
                <p>Kişiye özel önerileri görün</p>
                <button id="btn_Login">Giriş Yap</button>
                <p> Yeni müşteri misiniz?
                    <a href="#">Buradan başlayın.</a>
                </p>
                
            </div>
        </div>


</template>

<script>
export default {
    
}
</script>
<style scoped>
.Ana{
    border-width: 1px;
    border-style: inset;
    border-color: initial;
   
}
 .al-intro-benefit-icon {
    width: 85px;
    height: 75px;
    padding-right: 10px;
}
img {
    vertical-align: top;
        max-width: 100%;
    border: 0;
}
.a-ember body {
    font-family: "Amazon Ember",Arial,sans-serif;
}
body {
    background-color:white;
    font-size: 13px;
    line-height: 19px;
    color: #111;
    font-family: Arial,sans-serif;
}

.scrollmenu{
    background-color:white;
}
.scrollmenu #Listesatır2{
text-align: center;
padding: 100px 100px 100px 200px;
}
.scrollmenu #Listesatır2 .satır1{
 padding: 50px 0 100px 0;
}
.scrollmenu #Listesatır2 .satır1 #kutu1{
padding: 0 50px 0 0;
}
.scrollmenu .below{
       border-width: 1px;
    border-style: inset;
    border-color: initial;
}
#btn_Login{
    background-color: #FFC635;
    color:black;
    cursor: pointer;
    background-position: right -170px;
    height: 28px;
    position: relative;
    font-size: 12px;
    line-height: 28px;
    text-align: center;
    font-weight: 700;
    text-decoration: none;
    text-shadow: 0 1px 0 #ffe093;
        border: 0;
    line-height: 15px;
    margin: 0;
    padding-left: 20px;
    padding-right: 20px;
    border-radius: 10%


}

</style>