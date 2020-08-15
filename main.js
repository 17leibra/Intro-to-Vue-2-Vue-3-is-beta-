var app = new Vue({
    el: '#app',
    data: {
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