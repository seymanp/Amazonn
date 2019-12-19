<template>
    <div>
         <div class="LoginPage">
            <a>
        <router-link to="/">
            <img src="../assets/pic_whiteAmazon.png" width=100px>
        </router-link>
    </a>    
            <div class="Box">
                <h2>Hesap oluşturun</h2>
                <p>Ad - Soyad</p>
                <input id="inp_login">
                <p></p>

                <p>E-posta</p>
                <input id="inp_login">
                <p></p>

                <p>Şifre</p>
                <input id="inp_login">
                <p>Şifreler en az 6 karakterden oluşmalıdır.</p>
                <p></p>

                <p>Şifreyi tekrar girin</p>
                <input id="inp_login">
                <p></p>

               
            <button id="btn_Register"> 
                    <p>Amazon Hesabınızı Oluşturun</p>
            </button>
 
            <div class="a-row a-spacing-extra-large">

             

            

                <div id="legalTextRow" class="a-row a-spacing-top-medium a-size-small">
                    Bir hesap oluşturduğunuzda 
                    <a href="https://www.amazon.com.tr/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909000">Kullanım ve Satış Koşullarımızı</a>, 
                    <a href="https://www.amazon.com.tr/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909010">Gizlilik Bildirimimizi</a> ve 
                    <a href="https://www.amazon.com.tr/gp/help/customer/display.html?ie=UTF8&amp;nodeId=201909150">Çerez Bildirimimizi</a> kabul etmiş olursunuz.
                </div>

            </div>
              <div class="line">
                <h5>Zaten bir hesabınız var mı?</h5>
               <router-link to ="/login"> <a href="#"> Giriş Yap</a></router-link>
            </div>
            </div>


          

        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>
body{
    background-color: white;
}
.LoginPage{
          background-color: white;

 }
 a{
     background-color: white;
 }
 .Logo{
     background-color: white;
     height:103; 
     width: 40;
     
 }
 .Box{
     background-color: white;
    border: 1px solid;
    border-radius: 4px;
    position: relative;
    padding: 20px 26px!important;
    box-sizing: border-box;
    font-family: "Amazon Ember",Arial,sans-serif;
    font-size: 13px;
    line-height: 19px;
    color: #111;
    width: 402px;
    height: 600px;
    text-align: center;
    display: block;
      margin-left:auto;
      margin-right:auto;
 }
 .Box button{
         background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;

 }
 .Box .TextRow{
     background-color: white;
 }
 .LoginPage  .Box button{
     width:350px;
 }
.LoginPage  .Box button p{
background-color: transparent;
    border: 0;
    display: block;
    font-family: Arial,sans-serif;
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
}
.LoginPage .Box #inp_login{
    width:296;
    height: 40;
    width: 100%;
    margin-right: 0;
    background-color: #fff;
    height: 31px;
    padding: 3px 7px;
    line-height: normal;
        border: 1px solid #a6a6a6;
    border-top-color: #949494;
    border-radius: 3px;
    box-shadow: 0 1px 0 rgba(255,255,255,.5), 0 1px 0 rgba(0,0,0,.07) inset;
    outline: 0;
    margin: 0;
    font-size: 100%;
    vertical-align: middle;
     text-rendering: auto;
    color: initial;
    letter-spacing: normal;
    word-spacing: normal;
    text-transform: none;
    text-indent: 0px;
    text-shadow: none;
    display: inline-block;
    text-align: start;
    -webkit-appearance: textfield;
     -webkit-rtl-ordering: logical;
    cursor: text;
    margin: 0em;
    font: 400 13.3333px Arial;
    padding: 1px 0px;
    border-width: 2px;
    border-style: inset;
    border-color: initial;
    border-image: initial;
}
 .LoginPage   .line {
       text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
}
 .LoginPage  h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color:#767676


}

</style>