const app = new Vue({

  el: '#app',

  data: {

    isLoading: true,
    httpError: false,
    emails:[],

    
  },
  methods:{

    getNumber(){
      // this.isLoading = true;
      this.emails = [];

      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{

          console.log('response.data',response.data);

          const data = response.data;

          this.emails.push(data.response)
          //solo quando è completo l'array finisce il loading
          if(this.emails.length === 10){
            this.isLoading = false;
          }
        })
        .catch((error) =>{
          console.log('KO',error);
          // solo n questo caso viene visulizzato l'erroe
          this.httpError = true;
        })
      }

    }

  },
  






})