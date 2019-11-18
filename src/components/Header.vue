<template>
    <div class="main-container" id="head">
        <header v-show="header_visibility" class="nav-opt-sprite nav-locale-tr nav-lang-tr nav-ssl nav-unrec">

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
						</div>
					<router-link to="/">
								<a >
						<img src="../assets/pic_amazon.png" width=100px>
								</a>
					</router-link>
					
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
					<a href="#"> <img src="https://images-eu.ssl-images-amazon.com/images/G/41/x-site/2018/SWM/SWM_400x39_4._CB484008879_.jpg">
					</a>
				</div>
			</div>
			<div class="navbar" id="nav-bottom">
				<div class="nav-item" id="nav-to-left">
					<ul>
						<li><a href="#"><router-link to ="/gun" @click="header" style="float:left font-size: 13px;">Günün Fırsatları
	</router-link></a></li>
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
								<a>Müşteri Hizmetleri</a>
							</router-link>
						</li>
						<li>
							<router-link to="/moda">
								<a>moda</a>
							</router-link>
						</li>
						<!-- <li><a href="#">Satış Yap</a></li> -->

					</ul>
				</div>
				<div class="nav-item" id="nav-to-right">
					<ul>
						<li>
							<div id="login-area">
												<div class="navbar">
													<div class="dropdown">
								<a href="#"
									class="nav-a nav-a-2" data-ux-jq-mouseenter="true" id="nav-link-accountList"
									tabindex="25">
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

<script src="https://unpkg.com/@jeremyhamm/vue-slider"></script>

<script>
import Slider from '@jeremyhamm/vue-slider'

export default {
	components: {Slider},
	data(){
		return{
			header_visibility: true,
			
		}
	},
	methods:{
		header(){
			this.header_visibility = false;
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


/*------BUTTONS --------*/
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
#below{
border-top-style: solid;
   border-bottom-style: solid;
}


</style>