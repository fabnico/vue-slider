const app = new Vue({
   el: '.my_container',
   data: {
      myArray: [
         'img/image1.jpg',
         'img/image2.jpg',
         'img/image3.jpg',
         'img/image4.jpg'
      ],
      myIndex: 0,
   },
   methods:{
      prevClick: function(){
         if (this.myIndex != 0) {
            this.myIndex--
         } else {
            this.myIndex = this.myArray.length - 1
         }
      },
      forwClick: function(){
         if (this.myIndex != this.myArray.length - 1) {
            this.myIndex++
         } else {
            this.myIndex = 0
         }
      }
   }
})
