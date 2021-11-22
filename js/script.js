const app = new Vue({

  el: '#app',

  data: {

    isLoading: true,
    httpError: false,
    emails:[],

    
  },
  methods:{

    getEmail(){
      this.emails = [];

      for(let i = 0; i < 10; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{

          console.log('response.data',response.data);

          const data = response.data;

          this.emails.push(data.response)
        
        })
    
      }

    }

  },
  






})