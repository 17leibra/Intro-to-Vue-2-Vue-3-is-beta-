var app = new Vue({
    el: '#app',
    data: {
       product: 'Socks',
       description: 'These are cool socks',
       image: './assets/images/socks_green.jpg',
       link: 'https://www.vuemastery.com/courses/intro-to-vue-js/attribute-binding',
       inventory: 100,
       onSale: true,
       details: ["80% cotton","20% polyester","Gender-neutral"],
       variants: [
           {
            variantId: 2234,
            variantColor: "green"
           },
           {
            variantId: 2235,
            variantColor: "blue"
           }
       ],
       sizes: ['S','M','L','XL'],
    }
}) 