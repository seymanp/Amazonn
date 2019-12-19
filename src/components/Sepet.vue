<template>
  <div id="body">
    <div id="app">
        <p v-if="isLoading">Loading</p>
        <h2>Shopping Cart</h2>
        <p v-if="!cart.length">No item in cart.</p>
        <div class="cart">
        <div class="item" v-for="(item, index) in cart" :key="index">
            <div class="image">
            <a v-bind:href="item.url">
                <img v-bind:src="item.image" />
            </a>
            </div>
            <div class="info">
            <h4>{{item.name}}</h4>
            <p class="seller">by {{item.seller}}</p>
            <p class="status available" v-if="item.isAvailable">In Stock</p>
            <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
            <a href="#" v-on:click="removeFromCart(index)">Delete</a>
            <a href="#" class="secondary" v-on:click="saveForLater(index)">Save for later</a>
            </div>
        </div>
        </div>

        <h2 class="saved-header">Saved for later ({{saved.length}} item)</h2>
        <div class="cart">
        <div class="item" v-for="(item, index) in saved" :key="index">
            <div class="image">
            <a v-bind:href="item.url">
                <img v-bind:src="item.image" />
            </a>
            </div>
            <div class="info">
            <h4>{{item.name}}</h4>
            <p class="seller">by {{item.seller}}</p>
            <p class="status available" v-if="item.isAvailable">In Stock</p>
            <p class="shipping" v-if="item.isEligible">Eligible for FREE Shipping & FREE Returns</p>
            <a href="#" v-on:click="removeFromSavedList(index)">Delete</a>
            <a href="#" class="secondary" v-on:click="moveToCart(index)">Move to cart</a>
            </div>
        </div>
        </div>
    </div>
        
  </div>


</template>

  <script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script>


<script>
 const API_URL = "http://localhost:7000/login"
export default {
  
      el: '#app',
    name: 'Cart',
    data: {
      isLoading: true,
      cart: [],
      saved: []
    },
    methods: {
      removeFromCart(index) {
        this.cart.splice(index, 1);
      },
      saveForLater(index) {
        const item = this.cart.splice(index, 1);
        this.saved.push(item[0]);
      },
      removeFromSavedList(index) {
        this.saved.splice(index);
      },
      moveToCart(index) {
        const item = this.saved.splice(index, 1);
        this.cart.push(item[0]);
      }
    },
    created() {
      fetch('./data.json')
        .then((res) => { return res.json() })
        .then((res) => {
          this.isLoading = false;
          this.cart = res.cart;
          this.saved = res.saved;
        })
    }
    

}
</script>

<style>

#body {
  font-size: 13px;
  line-height: 19px;
  color: #111;
  font-family: Arial, sans-serif;
  background: #FFF;
}

h4, p {
  padding: 0;
  margin: 0;
}

.item {
  border-bottom: 1px solid #DDD;
  padding: 15px 0;
  overflow: hidden;
}

.item:first-child {
  border-top: 1px solid #DDD;
}

.item img {
  width: 100px;
  height: 100px;
}

h4 {
  color: #0066c0;
  font-size: 16px;
  line-height: 1.255;
}

.image, .info {
  float: left;
}

.image {
  margin-right: 20px;
}

.seller {
  font-size: 13px;
  line-height: 19px;
}

.status.available {
  color: #008a00;
  font-size: 12px;
  line-height: 1.5;
}

.shipping {
  color: #555;
  font-size: 12px;
  line-height: 1.5;
}

.info a {
  color: #0066c0;
  font-size: 12px;
  text-decoration: none;
  line-height: 24px;
}

.saved-header {
  margin-top: 50px;
}

a.secondary {
  padding-left: 5px;
  margin-left: 3px;
  border-left: 1px solid #CCC;
}



</style>