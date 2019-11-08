<template>
    <div class="main-container" style="background-color:white;">
        <div style="text-align: left;">
            <b style="font-size:20px;">KEŞFET</b>
        </div>
        <b-carousel 
      id="carousel-1"
      v-model="slide"
      :interval="0"
      controls
      indicators
      background="#ababab"
      img-width="1024"
      img-height="480"
      style="text-shadow: 1px 1px 2px #333; background-color:white;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide style="background-color:white;" >
        <template v-slot:img >
          <b-row style="padding:0 50px 0 50px;">
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" src="https://m.media-amazon.com/images/G/41/Amazon_com_tr-hq/2018/img/Country_Expansion/XCM_Manual_1146880_BF_WEEK_Deals_team_navbar_desktop_75x75_Country_Expansion_15_1542095126_png._CB479773031_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Cep Telefonu ve İletişim</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" src="https://m.media-amazon.com/images/G/41/Amazon_com_tr-hq/2018/img/Country_Expansion/XCM_Manual_1146880_BF_WEEK_Deals_team_navbar_desktop_75x75_Country_Expansion_12_1542095126_png._CB479773031_.png"  height="75px" role="presentation">
                    <a href="#" style="color: black; "><b><small>Kitap</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              
              
          </b-row>  
        </template>
      </b-carousel-slide>
      <b-carousel-slide style="background-color:white;" >
        <template v-slot:img >
          <b-row style="padding:0 50px 0 50px;">
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" src="https://m.media-amazon.com/images/G/41/Amazon_com_tr-hq/2018/img/Country_Expansion/XCM_Manual_1146880_BF_WEEK_Deals_team_navbar_desktop_75x75_Country_Expansion_15_1542095126_png._CB479773031_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Cep Telefonu ve İletişim</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" src="https://m.media-amazon.com/images/G/41/Amazon_com_tr-hq/2018/img/Country_Expansion/XCM_Manual_1146880_BF_WEEK_Deals_team_navbar_desktop_75x75_Country_Expansion_12_1542095126_png._CB479773031_.png"  height="75px" role="presentation">
                    <a href="#" style="color: black; "><b><small>Kitap</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                  <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              <b-col>
                 <div>
                    <img style="border-radius: 50%;" alt="" src="https://m.media-amazon.com/images/G/01/goldbox/images/faceout/Alldeals_white._CB468586681_.png"  height="75px" role="presentation"><br /> 
                    <a href="#" style="color: black; "><b><small>Tüm Fırsatlar</small></b></a>
                  </div>
              </b-col>
              
              
          </b-row>  
        </template>
      </b-carousel-slide>
    </b-carousel><br />






        

    </div>
</template>
<style scoped>


</style>
<script>
export default {
    
}
</script>