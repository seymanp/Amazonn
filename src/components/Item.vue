<template>
    <div class="Ana">
        <div class="row" id="bas">
            <a href="#">Mutfak</a>
            <p> > </p>
            <a href="#">Sofra</a>
            <p> > </p>
            <a href="#">Eşyaları</a>
            <p> > </p>
            <a href="#"> Yemek ve Çay-Kahve Takımları</a>
            <p> > </p>       
            <a href="#">Yemek Takımları</a>
        
        </div>
        <b-container class="Alt">
            <b-row style="height:1000px;">
                <b-col class="col-md-10">
                    <b-row style="height:500px;">
                        <b-col class="col-md-6">
                            <b-row>
                                <b-col class="col-md-2" style="height:500px;"></b-col>
                                <b-col class="col-md-10 " style="height:500px;"></b-col>
                            </b-row>
                        </b-col>
                        <b-col class="col-md-6">
                            <b-row style="height:100px"></b-row>
                            <b-row style="height:400px;"></b-row>
                        </b-col>
                    </b-row >
                    <b-row style="height:500px; ">
                        <b-col>
                            <b-row>
                                <strong>Bu Ürünü Gördükten Sonra Müşteriler Başka Hangi Ürünleri Alıyor?</strong>
                            </b-row>
                            <b-row style="height:110px"></b-row>
                            <b-row style="height:110px"></b-row>
                            <b-row style="height:110px"></b-row>
                            <b-row style="height:110px"></b-row>
                        </b-col>

                    </b-row>
                </b-col>
                <b-col class="col-md-2">
                    <b-row style="height:700px;">
                        
                    </b-row>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<style scoped>
.Alt {
    border:2px solid red;
    
}
.col{
    border:2px solid blueviolet;
}
.row{
    border:2px solid brown;
}
.Ana{
    background-color: white;
}
.Ana #bas{
    background-color:white;
    margin-left:10px;
    color: #555;}
  .Ana #bas a{
    
color: #767676!important;
font-size: 12px!important;
margin-top: 10px;
    }
    .Ana #bas p{
    
color: #767676!important;
font-size: 12px!important;
margin-top: 10px;
    }
</style>

<script>
export default {
    
}
</script>