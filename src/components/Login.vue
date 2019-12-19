<template> 
<div> <div class="LoginPage"> 
    <div class="Logo">
    <a>
        <router-link to="/">
            <img src="../assets/pic_whiteAmazon.png" width=100px>
        </router-link>
    </a>

</div>
        <div class="Box"> 
            <h2>Giriş Yap</h2> 
            <p>E-posta adresi veya telefon numarası</p> 
             <input
              id="inp_login"
                v-model="input.username"
              type:="text"
              
              name="email"
              required
              autofocus="autofocus"
              class="inputs"
              placeholder="Eposta Adresinizi Giriniz"


             
             > <p></p> 
             <p>Şifre Girin:</p> 
             <input 
             id="inp_login"
               v-model="input.password"
             
              name="password"
              required
              class="inputs"
              placeholder="Parola  Giriniz"
              > <p></p> 


            

        <button v-on:click="login()"><p> Devam Et</p> </button> 
        <div class="TextRow">Oturum açarak,
        Amazon’un <a href="#">Kullanım ve Satış Koşullarını</a> kabul etmektesiniz. Lütfen 
        <a href="https://www.amazon.com.tr/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=20190901000000000000000000000000000000000000">Gizlilik Bildirimimiz</a>,
        <a href="https://www.amazon.com.tr/gp/help/customer/display.html/?nodeId=201890250">Çerezler Bildirimimiz</a> ve 
        <a href="https://www.amazon.com.tr/gp/BIT/InternetBasedAds">İlgi Alanına Dayalı Reklamlar Bildirimimize</a> göz atın. 
        </div> <a href="#" class="a-expander-header a-declarative a-expander-inline-header a-link-expander" >
                    <i class="a-icon a-icon-expand"></i> 
                    <span class="a-expander-prompt"> Yardıma mı ihtiyacınız var? </span> 
                </a> </div> 
     <div class="line"> <h5>Amazon hesabınız yok mu?</h5> </div> 

	<button id="btn_Register">
        <router-link to ="/register" @click="header" style="float:left; color: black;"> 
        <p>Amazon Hesabınızı Oluşturun</p> </router-link>
    </button>


 </div> 
 <router-view />
 </div> 
</template>
 <script> 
 /* eslint-disable */
 const API_URL = "http://localhost:7000/login"

 /* eslint-disable */
 import axios from "axios";
 

export default {
    
    data(){
        return{
            input:{
                username:"",
                password:""
            },
            Uyeler:[],
            hatali:false,

            
        };


    },
    async created(){
        try{
            const res = await axios.get("http://localhost:7000/login")
            this.Uyeler = res.data;
        }
        catch(e){
            /* eslint-disable */ 
            console.error(e);
        }
    },
    
    methods:{
        login(){
            for(let i=0; i<this.Uyeler.length; i++){
                
                if(this.input.username !="" && this.input.password !=""){
                    
                    if(
                        this.input.username == this.Uyeler[i].Email &&
                        this.input.password == this.Uyeler[i].Sifre
                    ){
                        alert("Giriş Başarılı Anasayfaya Yönlendiriliyorsunuz");
                        this.$emit("authenticated", true);
                        this.$router.replace({ path: "/"});
                        this.hatali = true;
                    }
                
                }
            }
            if(this.input.username=="" || this.input.password ==""){
                alert("Boş")
            }
        }
       
    }
   
   
}
</script> 
<style scoped> body {
    background-color: white;
}

.LoginPage {
    background-color: white;
}

a {
    background-color: white;
}

.Logo {
    background-color: white;
    height: 103;
    width: 40;
}

.Box {
    background-color: white;
    border: 1px solid;
    border-radius: 4px;
    position: relative;
    padding: 20px 26px!important;
    box-sizing: border-box;
    font-family: "Amazon Ember", Arial, sans-serif;
    font-size: 13px;
    line-height: 19px;
    color: #111;
    width: 402px;
    height: 354px;
    text-align: center;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.Box button {
    background: #f0c14b;
    border-color: #a88734 #9c7e31 #846a29;
    color: #111;
}

.Box .TextRow {
    background-color: white;
}

.LoginPage .Box button {
    width: 350px;
}

.LoginPage .Box button p {
    background-color: transparent;
    border: 0;
    display: block;
    font-family: Arial, sans-serif;
    font-size: 13px;
    line-height: 29px;
    margin: 0;
    outline: 0;
    padding: 0 10px 0 11px;
    text-align: center;
    white-space: nowrap;
}

.LoginPage .Box #inp_login {
    width: 296;
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
    box-shadow: 0 1px 0 rgba(255, 255, 255, .5), 0 1px 0 rgba(0, 0, 0, .07) inset;
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

.LoginPage .line {
    text-align: center;
    text-align: center;
    position: relative;
    top: 2px;
    padding-top: 1px;
    margin-bottom: 14px;
    line-height: 0;
}

.LoginPage h5 {
    display: block;
    font-size: 0.83em;
    margin-block-start: 1.67em;
    margin-block-end: 1.67em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    color: #767676
}

.LoginPage #btn_Register {
    width: 500px;
}

</style>