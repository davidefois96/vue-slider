

const {createApp} = Vue;


createApp({
  
  data(){

    
    return{

      images : [
  
        { 
        url :'https://www.sardegnaturismo.it/sites/default/files/styles/larghezza_contenitore/public/galleria/torre_di_portoscuso_trolvag_comm_wiki.jpg?itok=iKOkXowb' ,
        nome : 'Portoscuso',
        descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

        }, 
        { 
        url :'https://www.sardegna.info/wp-content/uploads/sites/5/portoscuso.jpg' ,
        nome : 'Lungomare Cristoforo Colombo',
        descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

        }, 
        { 
          
        url :'https://www.radiox.it/wp-content/uploads/tonnaraportoscuso.jpg' ,
        nome : 'Tonnara',
        descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

        }, 
        { 
        url :'https://www.sacruxitta.it/wp-content/uploads/2012/07/pano-da-scalette.jpg',
        nome : 'Portopaglietto',
        descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

        }, 
        { 
        url :'https://i.ytimg.com/vi/HADEzZGUz0c/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGCUgYShlMA8=&amp;rs=AOn4CLBmGaElfP-VSCUtrxQ2bCOP_mh6_g',
        nome: 'Capoaltano',
        descrizione :'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'

        }, 

      ],
      cont: 0,
      activeAutoScroll: true

    }

  },

  
  methods: {

    
    scrollImg(next){

      next ? this.cont++ : this.cont--;
      
      if(this.cont===this.images.length){
        this.cont=0
        
      } else if(this.cont<0){
        this.cont=this.images.length - 1;
      }

    },
    
    
    autoScroll(){

    
      setInterval( ()=> {
      
        if(this.activeAutoScroll){

          this.scrollImg(true)
        }

      },3000)


    },

  
    
  },  

  mounted(){

    this.autoScroll()

   }


}).mount('#app');



