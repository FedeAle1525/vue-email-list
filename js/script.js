
const { createApp } = Vue

createApp({
  data() {
    return {
      emails: []
    }
  },

  methods: {

    // Creo un metodo che genera richiesta di una email (tramite API) a Server utilizzando la libreria Axios
    getEmailFromApi(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
      .then( (resp) => {

        // Dalla risposta del Server, recupero il dato che mi serve
        const result = resp.data.response;
        this.emails.push(result);

      })
    }
  },

  // Utilizzo Hook "mounted" per eseguire metodo al caricamento della pagina
  mounted(){

    for(let i=0; i < 10; i++){
      this.getEmailFromApi();
    }
    

  }
}).mount('#app')
