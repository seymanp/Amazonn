<template>
    <div>
        <!-- header  -->
        <div class="main-container" id="head">
            <header class="nav-opt-sprite nav-locale-tr nav-lang-tr nav-ssl nav-unrec">

                <div class="navbar row" id="nav-top">
                    <div class="nav-item col-2" id="nav-top-left">

                        <!-- <span style="font-size:30px;cursor:pointer;color: white;" onclick="openNav()">&#9776;  </span> -->
                        <!-- <Slider class="slider" style="background-color:white;" width="300" format="push" direction="left" :opacity="0.15" :links="[
                                {'id': 1, 'text': 'Merhaba, Giriş yap', 'url': '#'}, 
                                {'id': 2, 'text': 'KATEGORIYE GÖRE ALIŞVERIŞ YAP', 'url': '#'},
                                {'id': 3, 'text': 'Moda', 'url': '#'},
                                {'id': 4, 'text': 'Kitap', 'url': '#'},
                                {'id': 5, 'text': 'Bilgisayar ve Ofis', 'url': '#'},
                                {'id': 6, 'text': 'Telefon', 'url': '#'},
                                {'id': 7, 'text': 'Ev ve Mutfak', 'url': '#'},
                                {'id': 8, 'text': 'Kişisel Bakım ', 'url': '#'},
                                {'id': 10, 'text': 'Yapı Market ', 'url': '#'},
                                {'id':  11, 'text': 'Video ve Oyun Konsol ', 'url': '#'},
                                {'id': 12, 'text': 'Bebek ve Oyuncak ', 'url': '#'},
                                {'id': 13, 'text': 'Spor ve Outdoor ', 'url': '#'},
                                {'id': 14, 'text': 'Tüm Kategoriler ', 'url': '#'},
                                {'id': 15, 'text': 'Yardım ve Ayarlar ', 'url': '#'},
                                {'id': 16, 'text': 'Hesabım ', 'url': '#'},
                                {'id': 17, 'text': 'Yardım ', 'url': '#'},
                                {'id': 18, 'text': 'Giriş Yap ', 'url': '#'},
                            ]">
                        </Slider> -->

                        <div id="mySidebar" class="sidebar">
                        </div>
                        <a href="https://www.amazon.com.tr">
                            <img src="../assets/pic_amazon.png" width=100px>
                        </a>
                    </div>

                    <div class="nav-item col-6" id="nav-top-center">
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
                            <li><a href="#">Günün Fırsatları</a></li>
                            <li><a href="#">Çok Satanlar</a></li>
                            <li><a href="#">Yeni Çıkanlar</a></li>
                            <li><a href="#">Müşteri Hizmetleri</a></li>
                            <li><a href="#">Satış Yap</a></li>

                        </ul>
                    </div>
                    <div class="nav-item" id="nav-to-right">
                        <ul>
                            <li>
                                <div id="login-area">
                                    <a href="#" class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-accountList" tabindex="25">
                                        <span class="row nav-line-1">Merhaba, Giriş yap</span>
                                        <span class="row nav-line-2 text-bold">Hesap ve Listeler
                                                <span class="nav-icon nav-arrow" style="visibility: visible;">
                                                </span>

                                        </span>
                                    </a>
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
        </div>
        <!--  slider -->
        <div style="width: 1500px; height: 600px;">
            <b-carousel
            id="carousel-1"
            v-model="slide"
            :interval="4000"
            controls
            indicators
            background="#ababab"
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;"
            @sliding-start="onSlideStart"
            @sliding-end="onSlideEnd"
            >
            
            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1190410_1190410_915468_TR_TrustPage_DesktopHero_1500x600_1569398355_jpg._CB452867548_.jpg">

            </b-carousel-slide>

            
            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Books/XCM_Manual_1191858_1191858_926937_TR_Oct_Books_DesktopHero_1500x600_1569593328_jpg._CB451119150_.jpg">
                
            </b-carousel-slide>

            
            <b-carousel-slide img-src="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/Flips/Oct/GW/XCM_Manual_1186547_1186547_TR_SL_Oct_1500x600_1_1568988600_jpg._CB452702173_.jpg">
            
            </b-carousel-slide>

            
            
            
            </b-carousel>

            


        
        </div>
        <!-- body1 -->
        <div class="main-container">
            <b-container class="bv-example-row">
                <b-row style="padding: 5px;">
                    <b-col style="width: 250px; height: 420px; border: 1px solid black; margin: 10px; background-color:white; border:no;">
                        <div>
                            <p>%50'ye Varan İndirim</p>
                            <b-card
                            
                                img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193887_1193887_TR_OHL_DashboardCard_260x260_1_1570783146_jpg._SY260_CB449984532_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193887_1193887_TR_OHL_DashboardCard_520x520_1_1570783139_jpg._SY520_CB449984532_.jpg"
                                
                                
                            >
                                <b-form-text>
                                    Yapı markette seçili 50 TL altı ürünlerde
                                </b-form-text>

                            <a href="#" variant="primary"><small>Fırsatı yakala</small></a>

                    
                            </b-card>


                        </div>
                    </b-col>
                    <b-col style="width: 250px; height: 420px; border: 1px solid black; margin: 10px; background-color:white; border:no;">
                        <div>

                            <p>Yeni nesil laptoplar</p>
                                <b-card
                            
                                img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193227_1193227_936745_TR_Laptop_DashboardCard_260x260_1570704287_jpg._SY260_CB451762186_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193227_1193227_936744_TR_Laptop_DashboardCard_520x520_1570704287_jpg._SY520_CB451762187_.jpg"                            
                                
                            >
                                <b-form-text>
                                    Yeni dizüstü bilgisayarları keşfedin
                                </b-form-text>

                            <a href="#" variant="primary"><small>Alışverişe başla</small></a>

                    
                            </b-card>


                        </div>
                    </b-col>
                    <b-col style="width: 250px; height: 420px; border: 1px solid black; margin: 10px;background-color:white; border:no;">
                        <div>

                        <p>Amazon Fashion</p>
                            <b-card
                            
                                img-src="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/Flips/Oct/GW/XCM_Manual_1186559_SL_Oct_Dashboard_cards_260x260_Country_Expansion_XCM_Manual_1186559_TR_SL_OCT_CARDS_260x260_1_1566919320_jpg._SY260_CB437999787_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/Flips/Oct/GW/XCM_Manual_1186559_SL_Oct_Dashboard_cards_520x520_Country_Expansion_XCM_Manual_1186559_TR_SL_OCT_CARDS_520x520_1_1566919320_jpg._SY520_CB437999787_.jpg"                            
                                
                            >
                                <b-form-text>
                                    Sonbahar modası; kıyafet, çanta, ayakkabı ve daha fazlası...
                                </b-form-text>

                            <a href="#" variant="primary"><small>Moda alışverişe başla</small></a>

                    
                            </b-card>



                        </div>
                    </b-col>
                    <b-col style="width: 275px; height: 420px; border: 1px solid black; margin: 10px; background-color:white; border:no;">
                        <div>


                <p>iPhone 11 Ön Sipariş</p>
                            <b-card
                            
                                img-src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193935_1193935_942178_TR_iPhone11_DashboardCard_260x260_1570788024_jpg._SY260_CB449973437_.jpg" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2019/img/Country_Expansion/XCM_Manual_1193935_1193935_942179_TR_iPhone11_DashboardCard_520x520_1570788024_jpg._SY520_CB449973437_.jpg"                            
                                
                            >
                                <b-form-text>
                                19 Ekim'e kadar ön sipariş verin, iPhone 11'e önce siz sahip olun
                                </b-form-text>

                            <a href="#" variant="primary"><small>Ön sipariş ver</small></a>

                    
                            </b-card>





                
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
        <!-- body2 -->
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
                    <li>
                        <a href="#"><img alt="Fırsatlar" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/Launch-deals_Shovler_200x200._CB483414808_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/Launch-deals_Shovler_400x400._CB483414808_.jpg">
                        </a>
                    </li>
                    <li>
                        <a href="#"><img alt="Moda Fırsatları" src="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/GW/Jan/GW_Shoveler_Deal_JAN19_200x200._CB458459003_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/AMAZON-FASHION/2019/GW/Jan/GW_Shoveler_Deal_JAN19_400x400._CB458459003_.jpg"></a>
                    </li>
                    <li>
                        <a href="#"><img alt="Elektronik" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Electronics_Gateway-Bubbles_Electronics_200x200._CB475608282_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Electronics_Gateway-Bubbles_Electronics_400x400._CB475608277_.jpg"></a>
                    </li>
                    <li>
                        <a href="#"><img alt="Bilgisayar" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Computers_Gateway-Bubbles_Computers_200x200._CB473180879_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Computers_Gateway-Bubbles_Computers_400x400._CB473180876_.jpg"></a>
                    </li>

                    <li>
                        <a href="#"><img alt="Cep Telefonu ve İletişim" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Wireless_Gateway-Bubbles_MobilePhones_200x200._CB483593265_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Wireless_Gateway-Bubbles_MobilePhones_400x400._CB483593264_.jpg"></a>
                    </li>

                    <li>
                        <a href="#"><img alt="Kitap" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Books_Gateway-Bubbles_Books_200x200._CB473225163_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Books_Gateway-Bubbles_Books_400x400._CB473225160_.jpg"></a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Mutfak" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Kitchen_Gateway-Bubbles_Kitchen_200x200._CB478108634_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Kitchen_Gateway-Bubbles_Kitchen_400x400._CB478108634_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Oyuncak" src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_200x200_Country_Expansion_1117797_Toys_Gateway_Bubbles_Toys_200x200_1534841524-jpg._CB470709841_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_400x400_Country_Expansion_1117797_Toys_Gateway_Bubbles_Toys_400x400_1534841524-jpg._CB470698749_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Video Oyunu ve Konsol" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Video-Games_Gateway-Bubbles_VideoGames_200x200._CB483593270_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Video-Games_Gateway-Bubbles_VideoGames_400x400._CB483593270_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Ev ve Yaşam" src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_200x200_Country_Expansion_1117797_Home_Gateway_Bubbles_HomeDecor_200x200_1534841524-jpg._CB470698749_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_400x400_Country_Expansion_1117797_Home_Gateway_Bubbles_HomeDecor_400x400_1534841524-jpg._CB470698749_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Fotoğraf Makinesi ve Kamera" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Camera_Gateway-Bubbles_Camera_200x200._CB483593171_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Camera_Gateway-Bubbles_Camera_400x400._CB483593133_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Spor" src="https://images-eu.ssl-images-
                                        amazon.com/images/G/41/Launch/GW/Bubbles/sports-200x200_1535958820._CB483593170_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/sports-400x400_1535958820._CB483593133_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Spor" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/sports-200x200_1535958820._CB483593170_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/sports-400x400_1535958820._CB483593133_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Kişisel Bakım" src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/1138861_PCA_Shovler_200x200_1537254039._CB483569636_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/1138861_PCA_Shovler_400x400_1537254039._CB483569433_.jpg">

                        </a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Yapı Market" src="https://images-eu.ssl-images-amazon.com/images/G/41/2019/GW/1156671_Shoveler_200x200_1546589936._CB459080787_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/2019/GW/1156671_Shoveler_400x400_1546589936._CB459080784_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Bebek" src="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Baby_Gateway-Bubbles_Baby_200x200._CB473180876_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/Launch/GW/Bubbles/1117797_Baby_Gateway-Bubbles_Baby_400x400._CB473180876_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"><img alt="Ev Sineması" src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_200x200_Country_Expansion_1117797_Home_Entertainment_Gateway-Bubbles_HomeEntertainment_200x200_1534841524-jpg._CB470698749_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_400x400_Country_Expansion_1117797_Home_Entertainment_Gateway-Bubbles_HomeEntertainment_400x400_1534841524-jpg._CB470698749_.jpg">
                        </a>
                    </li>

                    <li>
                        <a href="#"> <img alt="Ofis ve Kırtasiye" src="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_200x200_Country_Expansion_1117797_Office_Gateway_Bubbles_Office_200x200_1534841524-jpg._CB470698749_.jpg" class="product-image" height="200px" width="200px" data-a-hires="https://images-eu.ssl-images-amazon.com/images/G/41/TR-hq/2018/img/Country_Expansion/XCM_Manual_1117797_Gateway_launch_400x400_Country_Expansion_1117797_Office_Gateway_Bubbles_Office_400x400_1534841524-jpg._CB470698749_.jpg">
                        </a>
                    </li>

                </ul>
            </div>
        </div>
        <!-- body3 -->
        
        <!-- body4 -->
        
        <!-- body5 -->
        
        <!-- body6 -->
        
        <!-- body7 -->
        
        <!-- body8 -->
        
        <!-- body9 -->
        
        <!-- body10 -->
    </div>
</template>

<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>

<script>
// import Slider from '@jeremyhamm/vue-slider'

// export default {
//     components: {Slider}
// }
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
    background-color:#232f3e;
}
 
header div.nav-item{
    display: inline-block;
}

header #nav-top-center{
    margin-top: 10px;
}

.navbar{
    padding: 0 !important;
}

#nav-top-center .input-group-append span.input-group-text{
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

.nav-item ul li{
    display: inline-block;
    margin-right:20px;
    padding-left: 0;
}

.nav-item ul li a{
    font-family: arial,sans-serif;
    font-size: 13px;
    color: #ccc;
    
}
#count-item-in-cart{
    color: #F08801;
    font-weight: bold;
}

.text-bold{
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
    padding: 8px 8px 8px 32px;
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
    .sidebar {padding-top: 15px;}
	.sidebar a {font-size: 18px;}
	
  }
.navMenu{
	background-color: white;
}

 
#nav-bottom #nav-to-right .ul .li .login-area .nav-link-accountList:hover{
background-color: aqua;
display: block;

}

 .main-container {
        margin-top: -300px;
    }

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
ul li{
    list-style-type: none;
    border-radius: 50%;
}

ul li a{
    list-style-type: none;
    border-radius: 50%;
}

#amazon-text:hover{
    background-color: white;
} 

</style>