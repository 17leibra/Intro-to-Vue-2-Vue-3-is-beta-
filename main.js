Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            required: true
        }
    },
    template: `
    <div class="product">
    <div class="product-image">
      <img :src="image">
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1> 
      <p>{{ description }} </p>
      <p v-if="inStock">In Stock</p>
      <p v-else  :class="{outOfStock: !inStock}">Out Of Stock</p>
      <p v-show="onSale">{{saleType}}</p>
      <!-- v-show can be used to hide elemets if expression is false v-if removes the element from DOM-->
      <h4>Details</h4>
      <ul>
        <li v-for="detail in details">{{detail}}</li>
      </ul>
      <p>User is premiun: {{premium}}</p>
      <h4>Colors</h4>
      <div v-for="(variant, index) in variants" 
        :key="variant.variantId"
        class="color-box" 
        :style="{ backgroundColor:  variant.variantColor}"
        @mouseover="updateProduct(index)" >
      </div>
      <h4>Sizes</h4>
      <ul>
        <li v-for="size in sizes">{{size}}</li>
      </ul>
      
      <button v-on:click="addToCart" 
            :disabled="!inStock"
            :class="{ disabledButton: !inStock}" >Add to Cart</button>
      <button @click="removeFromCart"
            :disabled="cart===0" 
            :class="{ disabledButton: cart===0}">Remove From Cart</button>
      <div class="cart">
        <p>Cart {{cart}}</p>
      </div>
        </div>
    
        </div>
    `,
    data() {
        return{
        brand: 'Vue Mastery',
        product: 'Socks',
        description: 'These are cool socks',
        selectedVariant: 0,
        link: 'https://www.vuemastery.com/',
        inventory: 10,
        onSale: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        variants: [
            {
             variantId: 2234,
             variantColor: "green",
             variantImage: './assets/images/socks_green.jpg',
             variantQuantity: 10
            },
            {
             variantId: 2235,
             variantColor: "blue",
             variantImage: './assets/images/socks_blue.jpg',
             variantQuantity: 0
            }
        ],
        sizes: ['S','M','L','XL'],
        cart: 0,
        }
    },
     methods: {
         addToCart() {
             this.cart ++
         },
         updateProduct(index) {
             this.selectedVariant = index
             console.log(index)
         },
         removeFromCart(){
             this.cart --
         }
 
     },
     computed: {
         title() {
             return this.brand + ' ' + this.product
         },
         image() {
             return this.variants[this.selectedVariant].variantImage
         },
         inStock() {
             return this.variants[this.selectedVariant].variantQuantity
         },
         saleType(){
             if(this.onSale){
                 return this.brand + ' ' + this.product+ ' are on sale'
             }
         }
     }
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
}) 
