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
      <p>Shipping   {{ shipping }}</p>
      <!-- v-show can be used to hide elemets if expression is false v-if removes the element from DOM-->
      
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
      <button @click="removeFromCart">Remove From Cart</button>
             <!-- for above :disabled="cart===0" 
             :class="{ disabledButton: cart===0}"-->
        </div>
        <div class="footer"><a :href="link" target="_blank">link to Vue Mastery</a></div>
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
             variantQuantity: 5
            }
        ],
        sizes: ['S','M','L','XL'],
        }
    },
     methods: {
         addToCart() {
             this.$emit('add-to-cart', this.variants[this.selectedVariant].variantId)
         },
         updateProduct(index) {
             this.selectedVariant = index
             console.log(index)
         },
         removeFromCart(){
             this.$emit('remove-from-cart', this.variants[this.selectedVariant].variantId)
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
         },
         shipping(){
             if(this.premium){
                 return "Free"
             } else{
                 return "2.99"
             }
         }
     }
})
Vue.component('product-details', {
    props: {
        details: {
            type: Array,
            required: true
        }
    },
    
    template: `
        <div class="details">
        <h4>Details</h4>
        <ul>
            <li v-for="detail in details">{{detail}}</li>
        </ul>
        </div>`
})
var app = new Vue({
    el: '#app',
    data: {
        premium: true,
        details: ["80% cotton","20% polyester","Gender-neutral"],
        cart: [],
    },
    methods: {
        updateCartAdd(id) {
            this.cart.push(id)
        },
        removeItem(id){
            for(var i = this.cart.length - 1; i >= 0; i--) {
                if (this.cart[i] === id) {
                   this.cart.splice(i, 1);
                   break;
                }
            }   
        }
    }
}) 
