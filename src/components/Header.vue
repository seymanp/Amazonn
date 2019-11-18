<template>

    <div class="main-container" id="head" style="color:white">

        <header v-show="header_visibility" class="nav-opt-sprite nav-locale-tr nav-lang-tr nav-ssl nav-unrec">

            <div class="navbar row" id="nav-top">
                <div class="nav-item col-2" id="nav-top-left" style="margin-left:0px;">

                    <div id="YanMenu" class="sidenav">

                        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">

								&times;</a>

                        <a id="hmenu-customer-profile-link" href="">
                            <div id="hmenu-customer-profile left" style="background-color: #2c3e50; width: 350px;">

                                <i class="fa fa-user-circle" style="margin-right: 2px; color: white;"></i>

                                <div id="hmenu-customer-name" style="margin-top: 5px">Merhaba, Giriş yap</div>

                            </div>
                        </a>

                        <ul class="hmenu hmenu-visible" style="color:black">

                            <li>
                                <div class="hmenu-item hmenu-title left">KATEGORIYE GÖRE ALIŞVERIŞ YAP</div>
                            </li>

                            <li>
                                <a v-on:click="openModa()" class="hmenu-item">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Moda </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>
                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left" style="color:black">Kitap </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a v-on:click="openElektronik()" class="hmenu-item">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Elektronik </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Bilgisayar ve Ofis </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Telefon </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Ev ve Mutfak </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Kişisel Bakım </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left"> Yapı Market </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Video Oyunu ve Konsol </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Bebek ve Oyuncak </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Spor ve Outdoor</p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left"> Tüm Kategoriler </p>
                                        </b-col>
                                        <b-col><i class="right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>
                            <li class="hmenu-separator"></li>
                            <li style="color:black">
                                <div class="hmenu-item hmenu-title left" style="border-top:1px solid black; padding-left: 30px;">YARDIM VE AYARLAR</div>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <div class="left">
                                        Hesabım
                                    </div>
                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <div class="left">
                                        Yardım
                                    </div>
                                </a>
                            </li>

                            <li style="color:black">
                                <a href="">
                                    <div class="left">
                                        Giriş Yap
                                    </div>
                                </a>
                            </li>
                            <li class="hmenu-separator"></li>
                        </ul>

                    </div>

                    <div id="YanMenuModa" class="sidenav">

                        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">

								&times;</a>

                        <a id="hmenu-customer-profile-link" href="">
                            <div id="hmenu-customer-profile left" style="background-color: #2c3e50; width: 350px;">

                                <i class="fa fa-user-circle" style="margin-right: 2px; color: white;"></i>

                                <div id="hmenu-customer-name" style="margin-top: 5px">Merhaba, Giriş yap</div>

                            </div>
                        </a>

                        <ul class="hmenu hmenu-visible">
                            <li>
                                <a v-on:click="openNav()" class="hmenu-item">
                                    <b-row style="color: black;">
                                        <b-col>
                                            <i class="fa fa-arrow-left left"></i>
                                        </b-col>
                                        <b-col>
                                            <p class="left">ANA MENÜ </p>
                                        </b-col>
                                    </b-row>
                                </a>
                            </li>

                            <li>
                                <div class="hmenu-item hmenu-title left" style="color: black;">MODA</div>
                            </li>

                            <li >
								<router-link to="/moda">
                                <a class="hmenu-item" style="color:black">
                                    <b-row >
                                        <b-col>
                                            <p class="left">Kadın </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>
                                </a>
								</router-link>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Erkek </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Kız Çocuk</p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Erkek Çocuk </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Bebek </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Tüm Moda Ürünleri </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left"> İndirim </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Video Oyunu ve Konsol </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item" style="color:black">
                                    <b-row>
                                        <b-col>
                                            <p class="left">Bebek ve Oyuncak </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li class="hmenu-separator"></li>
                        </ul>

                    </div>

                    <div id="YanMenuElektronik" class="sidenav">

                        <a href="javascript:void(0)" class="closebtn" v-on:click="closeNav()">

								&times;</a>

                        <a id="hmenu-customer-profile-link" href="">
                            <div id="hmenu-customer-profile left" style="background-color: #2c3e50; width: 350px;">

                                <i class="fa fa-user-circle" style="margin-right: 2px; color: white;"></i>

                                <div id="hmenu-customer-name" style="margin-top: 5px">Merhaba, Giriş yap</div>

                            </div>
                        </a>

                        <ul class="hmenu hmenu-visible">
                            <li>
                                <a v-on:click="openNav()" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <i class="fa fa-arrow-left left"></i>
                                        </b-col>
                                        <b-col>
                                            <p class="left">ANA MENÜ </p>
                                        </b-col>
                                    </b-row>
                                </a>
                            </li>

                            <li style="color:black">
                                <div class="hmenu-item hmenu-title left">ELEKTRONİK</div>
                            </li>

                            <li style="color:black">
								<router-link to="/item2">
                                <a  class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            
                                                <p class="left"> Bilgisayarlar ve Tabletler </p>
                                            
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>
                                </a>
								</router-link>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Cep Telefonu ve İletişim </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Kameralar ve Fotoğraf Makineleri </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Elektrikli Ev ve Mutfak Aletleri </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Televizyon ve Ses Sistemleri </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Kulaklıklar </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Elektronik Aksesuar </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li style="color:black">
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left"> Kişisel Bakım </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Video Oyunu ve Konsol </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li>
                                <a href="" class="hmenu-item">
                                    <b-row style="color:black">
                                        <b-col>
                                            <p class="left">Tüm Elektonik Ürünleri </p>
                                        </b-col>
                                        <b-col><i class="fa fa-chevron-right right"></i></b-col>
                                    </b-row>

                                </a>
                            </li>

                            <li class="hmenu-separator"></li>

                            <li class="hmenu-separator"></li>
                        </ul>

                    </div>

                    <span class="fa fa-bars" role="img" style="font-size:30px;cursor:pointer; margin-left:-150px; border:1px solid white; border-radius: 3px; font-size: 25px;     width: 38px; height: 36px;" v-on:click="openNav()">

					</span>

                </div>

                <div class="nav-item col-2">
                    <a href="https://www.amazon.com.tr">
                        <img src="../assets/pic_amazon.png" width=100px style="margin-right: 200px;">
                    </a>
                </div>

                <div class="nav-item col-4" id="nav-top-center">
                    <div class="input-group mb-3">
                        <div class="input-group-prepend">
                            <select aria-describedby="searchDropdownDescription" class="nav-search-dropdown searchSelect" data-nav-digest="0wsxXrBG0/pT/iqluXUXN0Rn2Zw=" data-nav-selected="0" id="searchDropdownBox" name="url" style="display: block; top: 0px;" tabindex="5" title="Şurada ara:">
                                <option selected="selected" value="search-alias=aps">Tüm Kategoriler</option>
                                <option value="search-alias=baby">Bebek</option>
                                <option value="search-alias=computers">Bilgisayarlar</option>
                                <option value="search-alias=electronics">Elektronik</option>
                                <option value="search-alias=home">Ev</option>
                                <option value="search-alias=kitchen">Ev ve Mutfak</option>
                                <option value="search-alias=stripbooks">Kitaplar</option>
                                <option value="search-alias=fashion">Moda</option>
                                <option value="search-alias=office-products">Ofis Ürünleri</option>
                                <option value="search-alias=toys">Oyuncaklar ve Oyunlar</option>
                                <option value="search-alias=videogames">PC ve Video Oyunları</option>
                                <option value="search-alias=sports">Spor</option>
                                <option value="search-alias=diy">Yapı Market</option>
                            </select>
                        </div>
                        <input type="text" class="form-control" aria-label="Amount (to the nearest dollar)">
                        <div class="input-group-append">
                            <span class="input-group-text">
								<i class="fas fa-search"
								style="color:black;"></i></span>
                        </div>
                    </div>
                </div>
                <div class="nav-item col-4" id="nav-top-right">
                    <a href="#"> <img src="https://images-eu.ssl-images-amazon.com/images/G/41/x-site/2018/SWM/SWM_400x39_4._CB484008879_.jpg">
                    </a>
                </div>
            </div>
            <div class="navbar" id="nav-bottom">
                <div class="nav-item" id="nav-to-left">
                    <ul>
                        <li>
                            <a href="#">
                                <router-link to="/gun" @click="header" style="float:left font-size: 13px;">Günün Fırsatları
                                </router-link>
                            </a>
                        </li>
                        <li>
                            <router-link to="/cok-satanlar">
                                <a href="#">Çok Satanlar</a>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/yeni-cikan">
                                <a>Yeni Çıkanlar</a>
                            </router-link>
                        </li>
                          <li>
                            <router-link to="/help">
                                <a> Müşteri Hizmetleri</a>
                            </router-link>
                        </li>
                        <li><a href="#">Satış Yap</a></li>

                    </ul>
                </div>

                <div class="nav-item" id="nav-to-right">
                    <ul>
                        <li>
                            <div id="login-area">
                                <div class="navbar">
                                    <div class="dropdown">
                                        <a href="#" class="nav-a nav-a-2" data-ux-jq-mouseenter="true" style="color:black" id="nav-link-accountList" tabindex="25">
                                            <span class="row nav-line-1"> </span>
                                            <span class="row nav-line-2 text-bold">
										<span class="nav-icon nav-arrow" style="visibility: visible;">
													<div>
														<div class="mainn">
														<b-dropdown id="dropdown-buttons" text="Merhaba, Giriş yap
														Hesap ve Listeler"  class="m-2 ">
															<b-dropdown-item-button style="width: 485px;" ></b-dropdown-item-button>
																<b-container>
																	<b-row style="border: 0.5px solid gray; height: 70px;">
																		<b-col>
																			<b-row>
																				<button id="btn_Login" @click="header_visibility = false" style="margin-left: 30%; margin-top: 8px; width:197px; height:30px; border-color: #c89411 #b0820f #99710d; background-color:#c89411;"><router-link to ="/register" @click="header" >Giriş Yap</router-link></button>
																			</b-row>
																			<b-row class="text-center"  style="height: 15px; margin-left: 55px;">
																				<p style="font-size:11px;">Yeni müşteri misiniz? <a style="font-size:11px; color: #0066c0;" href="#"> Buradan başlayın.</a> </p>
																			</b-row>
																		</b-col>
																	</b-row>
																	<b-row style="border: 0.5px solid gray; height: 115px;">
																		<b-col style="border: 0.5px solid gray;" class="col-md-6">
																			<ul style="display: inline;">
																				<li style="float:left; font-size: 16px; text-color: black; color: black;"><button style="border:none; background-color:white;"><router-link style="color: black;" to ="/listeler" @click="header_visibility = false" >Listelerim</router-link></button></li>
																				<li><button style="border:none; background-color:white;"><router-link to ="/listeler" @click="header" style="float:left font-size: 13px; color: black;">Liste Oluşturun</router-link></button></li>
																			</ul>

																		</b-col>
																		<b-col style="border: 0.5px solid gray;" class="col-md-6">
																			<li><router-link to ="/login" @click="header" style="float:left; color: black;">Hesabım</router-link></li>
																			<ul style="display: inline-block; float: left;">

																				<li style="float:left;"><button style="border:none; background-color:white;"><router-link to ="/hesabim" style=" font-size: 16px; color: black;">Hesabım</router-link></button></li>
																				<li style="float:left;"><button style="border:none; background-color:white;" @click="header_visibility = false"><router-link to ="/login" style=" font-size: 13px; color: black;" >Siparişlerim</router-link></button></li>
																				<li style="float:left;"><button style="border:none; background-color:white;" @click="header_visibility = false"><router-link to ="/login" style=" font-size: 13px; color: black;">Benim İçin Önerilenler</router-link></button></li>
																			</ul>
																		</b-col>
																	</b-row>
																</b-container>
														</b-dropdown>
														</div>

													</div>	

										</span>

                                            </span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="text-bold">
                                <a href="https://www.amazon.com.tr/gp/css/order-history?ref_=nav_orders_first">
									Siparişler
								</a>
                            </div>
                        </li>
                        <li>
                            <div id="cart-area">
                                <a href="#">
                                    <div class="col">
                                        <div class="col"><i class="fas fa-shopping-cart"></i></div>
                                        <div class="col" id="count-item-in-cart">0</div>
                                    </div>

                                    <div class="col">
                                        <div class="row">Alışveriş</div>
                                        <div class="row text-bold">Sepeti</div>
                                    </div>
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <router-view />
    </div>

</template>

<!--<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>-->

<script>
    // import Slider from '@jeremyhamm/vue-slider'
    export default {
        // components: {Slider},
        data() {
                return {
                    header_visibility: true,

                }
            },
            methods: {
                header() {
                        this.header_visibility = false;
                    },

                    openNav() {
                        document.getElementById("YanMenuModa").style.width = "0";
                        document.getElementById("YanMenuElektronik").style.width = "0";
                        document.getElementById("YanMenu").style.width = "350px";
                    },

                    openModa() {
                        document.getElementById("YanMenu").style.width = "0";
                        document.getElementById("YanMenuElektronik").style.width = "0";
                        document.getElementById("YanMenuModa").style.width = "350px";
                    },

                    openElektronik() {
                        document.getElementById("YanMenu").style.width = "0";
                        document.getElementById("YanMenuModa").style.width = "0";
                        document.getElementById("YanMenuElektronik").style.width = "350px";
                    },

                    closeNav() {
                        document.getElementById("YanMenu").style.width = "0";
                        document.getElementById("YanMenuModa").style.width = "0";
                        document.getElementById("YanMenuElektronik").style.width = "0";
                    }
            }

    }
</script>

<style type="text/css">
    #navbar #nav-shop .nav-a:hover {
        color: #ff9900;
        text-decoration: underline;
    }
    
    #navbar #nav-search .nav-search-facade,
    #navbar #nav-tools .nav-icon,
    #navbar #nav-shop .nav-icon,
    #navbar #nav-subnav .nav-hasArrow .nav-arrow {
        display: none;
    }
    
    #navbar #nav-search .nav-search-submit,
    #navbar #nav-search .nav-search-scope {
        display: block;
    }
    
    #nav-search .nav-search-scope {
        padding: 0 5px;
    }
    
    #navbar #nav-search .nav-search-dropdown {
        position: relative;
        top: 5px;
        height: 23px;
        font-size: 14px;
        opacity: 1;
        filter: alpha(opacity=100);
    }
    
    header {
        background-color: #232f3e;
    }
    
    header div.nav-item {
        display: inline-block;
    }
    
    header #nav-top-center {
        margin-top: 10px;
    }
    
    .navbar {
        padding: 0 !important;
    }
    
    #nav-top-center .input-group-append span.input-group-text {
        background-color: #F3A846;
    }
    
    #nav-top-right a {
        font-size: 24px;
        color: grey;
        text-decoration: none;
    }
    
    #nav-to-left ul {
        padding-left: 5px;
    }
    
    .nav-item ul li {
        display: inline-block;
        margin-right: 20px;
        padding-left: 0;
    }
    
    .nav-item ul li a {
        font-family: arial, sans-serif;
        font-size: 13px;
        color: #ccc;
    }
    
    #count-item-in-cart {
        color: #F08801;
        font-weight: bold;
    }
    
    .text-bold {
        font-weight: 800;
    }
    
    .sidebar {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        transition: 0.5s;
        padding-top: 60px;
    }
    
    .sidebar a {
        padding: 0px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: #818181;
        display: block;
        transition: 0.3s;
    }
    
    .sidebar a:hover {
        color: #f1f1f1;
    }
    
    .sidebar .closebtn {
        position: absolute;
        top: 0;
        right: 25px;
        font-size: 36px;
        margin-left: 50px;
    }
    
    .openbtn {
        font-size: 20px;
        cursor: pointer;
        background-color: #111;
        color: white;
        padding: 10px 15px;
        border: none;
    }
    
    .openbtn:hover {
        background-color: #444;
    }
    
    #main {
        transition: margin-left .5s;
        padding: 16px;
    }
    /* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
    
    @media screen and (max-height: 450px) {
        .sidebar {
            padding-top: 15px;
        }
        .sidebar a {
            font-size: 18px;
        }
    }
    
    .navMenu {
        background-color: white;
    }
    
    #nav-bottom #nav-to-right .ul .li .login-area .nav-link-accountList:hover {
        background-color: aqua;
        display: block;
    }
  
    
    #btn_Login {
        background-color: #FFC635;
        color: black;
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
    
    #below {
        border-top-style: solid;
        border-bottom-style: solid;
    }
   
    .sidenav {
        height: 100%;
        width: 0;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: white;
        overflow-x: hidden;
        /*Yatay kaydırmayı devre dışı bırak */
        transition: 0.5s;
        /* Sidenav'da kaymaya 0,5 saniye geçiş efekti */
        padding-top: 0px;
        /*İçeriği üstten 60 piksel yerleştirin */
    }
    
    .sidenav a {
        padding: 8px 8px 8px 32px;
        text-decoration: none;
        font-size: 25px;
        color: white;
        display: block;
        transition: 0.3s;
    }
    /*Menüler üzerine gelince  renklerini değiştirin */
    
    .sidenav a:hover {
        color: #f1f1f1;
        text-decoration: none;
    }
    /*Kapat düğmesini konumlandırın ve stillendirin (sağ üst köşe) */
    
    .sidenav .closebtn {
        position: absolute;
        top: 0;
        right: 5px;
        font-size: 36px;
        margin-left: 100px;
    }
    /* Yüksekliğin 450 pikselden az olduğu daha küçük ekranlarda, 
sidenav stilini değiştirin 
(daha az dolgu ve daha küçük bir yazı tipi boyutu) */
    
    @media screen and (max-height: 450px) {
        .sidenav {
            padding-top: 15px;
        }
        .sidenav a {
            font-size: 18px;
        }
    }
    
    #hmenu-customer-name {
        display: inline-block;
        white-space: nowrap;
        font-size: 19px;
        max-width: 90%;
        line-height: 25px;
        color: #fff;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    
    .hmenu-item {
        width: 350px;
    }
    
    .hmenu {
        display: inline;
    }
    
    .hmenu-item:hover {
        background-color: violet;
    }
    
    .right {
        text-align: right;
    }
    
    .left {
        text-align: left;
    }
    
    .hmenu-visible {
        visibility: visible;
    }
</style>