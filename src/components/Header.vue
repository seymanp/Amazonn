<template>
    <div class="main-container">
        <header class="nav-opt-sprite nav-locale-tr nav-lang-tr nav-ssl nav-unrec">

			<div class="navbar row" id="nav-top">
				<div class="nav-item col-2" id="nav-top-left">

							
					<!-- <span style="font-size:30px;cursor:pointer;color: white;" onclick="openNav()">&#9776;  </span> -->
					<Slider class="slider" style="background-color:white;" width="300" format="push" direction="left" :opacity="0.15" :links="[
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
                    </Slider>
					
						<div id="mySidebar" class="sidebar">
							<!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">×</a>
							<ul>
								
								<li><a href="#">Merhaba, Giriş yap</a></li>
								<li><a href="#">KATAGORİYE GÖRE ALIŞVERİŞ YAP</a></li>
								<li><a href="#">Moda</a></li>
								<li><a href="#">Kitap</a></li>
								<li><a href="#">Bilgisayar ve Ofis</a></li>
								<li><a href="#">Telefon</a></li>
								<li><a href="#">Ev ve Mutfak</a></li>
								<li><a href="#">Kişisel Bakım</a></li>
								<li><a href="#">Yapı Market</a></li>
								<li><a href="#">Video ve Oyun Konsol</a></li>
								<li><a href="#">Bebek ve Oyuncak</a></li>
								<li><a href="#">Spor ve Outdoor</a></li>
								<li><a href="#">Tüm Kategoriler</a></li>
								<li><p href="#">Yardım ve Ayarlar</p></li>
								<li><a href="#">Hesabım</a></li>
								<li><a href="#">Yardım</a></li>
								<li><a href="#">Giriş Yap</a></li>
				
							</ul> -->
						</div>
					<a href="https://www.amazon.com.tr">
						<img src="../assets/pic_amazon.png" width=100px>
					</a>
				</div>


				<div class="nav-item col-6" id="nav-top-center">
					<div class="input-group mb-3">
						<div class="input-group-prepend">
							<select aria-describedby="searchDropdownDescription"
								class="nav-search-dropdown searchSelect" data-nav-digest="0wsxXrBG0/pT/iqluXUXN0Rn2Zw="
								data-nav-selected="0" id="searchDropdownBox" name="url"
								style="display: block; top: 0px;" tabindex="5" title="Şurada ara:">
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
					<a href="#"><img
							src="https://images-eu.ssl-images-amazon.com/images/G/41/x-site/2018/SWM/SWM_400x39_4._CB484008879_.jpg"></a>
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
								<a href="https://www.amazon.com.tr/ap/signin?openid.pape.max_auth_age=0&amp;openid.return_to=https%3A%2F%2Fwww.amazon.com.tr%2Fref%3Dnav_logo%3Fref_%3Dnav_ya_signin%26_encoding%3DUTF8&amp;openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.assoc_handle=trflex&amp;openid.mode=checkid_setup&amp;openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&amp;openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&amp;"
									class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-accountList"
									tabindex="25">
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
</template>

<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>

<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
    components: {Slider}
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

</style>