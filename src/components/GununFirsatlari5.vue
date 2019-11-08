<template>
    <div class="main-container" style="background-color:white;">


        <div class="center" style="padding-left:700px;">
            <nav aria-label="...">
                <ul class="pagination">
                    <li class="page-item">
                        <router-link class="page-link" to ="/gun" @click="header" style="float:left font-size: 13px;">Geri
	</router-link>
                    </li>
                    <li class="page-item"><router-link class="page-link" to ="/gun" @click="header" style="float:left font-size: 13px;">1
	</router-link></li>
                    <li class="page-item"><router-link class="page-link" to ="/gun2" @click="header" style="float:left font-size: 13px;">2
	</router-link></li>
                    <li class="page-item">
                    <router-link class="page-link" to ="/gun2" @click="header" style="float:left font-size: 13px;">İleri
	</router-link>
                    </li>
                </ul>
            </nav>
        </div>




        <div style="text-align: left;">
            <b style="font-size:20px;">Fırsatlar</b><br />
           <small> Harika Amazon fırsatlarını arıyorsanız tam da doğru yerdesiniz. Fırsatlar sayfamız ile kategorileri tek tek gezmeden tüm seçili fırsatları rahatça keşfedebilir ve özel indirimli fiyatlardan yararlanabilirsiniz. Günün fırsatları ile cep </small>
           <small>telefonlarında, elektronik ürünlerde, bilgisayar ve konsol oyunlarında, ev ve mutfak ürünlerinde, spor aletlerinde kısacası tüm kategorilerden seçilmiş olan ürünlerdeki fırsatlara ve özel indirimlere ulaşabilirsiniz. Her gün “Bitmeden</small>
           <small>Yakala!” fırsatlarının altında zaman sınırlı fırsatlarımızı bulacaksınız. Bu fırsatları kaçırmamak için elinizi çabuk tutmanız gerekiyor. Yeni fırsatlardan haberdar olmak için sayfamızı sıklıkla ziyaret etmeyi unutmayın. “Bitmeden</small>
           <small>Yakala!” fırsatları sadece belirli bir süre için geçerlidir. “Bitmeden Yakala!” fırsatlarında, indirimin sona ermesine kaç saat kaldığı ve stokların ne kadarının tükendiği ürünün yanında belirtilmektedir. “Bitmeden Yakala!” ürünlerini</small>
           <small>sepetinize attığınızda, 15 dakika içinde alışverişinizi tamamlamanız gerekir aksi takdirde indirimden yararlanamazsınız. “Bitmeden Yakala!” fırsatları ile ilgili ayrıntılı bilgi almak için lütfen yardım sayfalarımızı ziyaret edin. Yeni</small>
           <small>fırsatlardan haberdar olmak ve “Bitmeden Yakala!” fırsatlarını tükenmeden yakalamak için sayfamızı sıklıkla ziyaret etmeyi unutmayın. Fırsatlarımıza mobil alışveriş uygulamamızı kullanarak da ulaşabilirsiniz.</small>
        </div>
        <div class="center">
           <small>Kişiye özel önerileri görün</small><br />
           <button style=" background: #f0c14b; border-color: #a88734 #9c7e31 #846a29; color: #111; border-radius: 5px; width: 200px;">Giriş Yap</button><br />
           <small>Yeni müşteri misiniz? <a href="#">Buradan başlayın.</a></small>
        </div>

    </div>
</template>

<script>
export default {
 
}
</script>

<style scoped>
.center{
    text-align: center;
}
</style>