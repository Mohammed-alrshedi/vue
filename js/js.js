
Vue.component('app-count',{





})

var vm = new Vue({
   el: '#first_app',

   data:{

    name: 'saud moahmmed',

    age : '23 years old',

    job: 'a programing',

    skils:['read','computer','sleeping'],

    color:'',

    check:''

   },

   methods: {
     run:function (){

        this.color=  '<style> body {color:red;}</style>';


     },
     colors:function(){

      this.color=  '<style> body {color:green;}</style>';



     }  
   }
})


