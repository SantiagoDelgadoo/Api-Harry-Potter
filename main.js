const { createApp } = Vue

createApp({
  data() {
    return {
      mensaje: 'Vue.Js',
      personajes: [],
      nombre: "",
      personajesFiltrados:[],
    }
  },
  created() {
    fetch ("https://hp-api.onrender.com/api/characters")
    .then (response => response.json())
    .then(data =>{
        this.personajes = data
        this.personajesFiltrados = this.personajes
    })
},
mounted(){
      

  },
  methods:{
     filtrarPorNombre(){
        this.personajesFiltrados = this.personajes.filter(personaje=>
            personaje.name.toLowerCase().includes(this.nombre.toLowerCase()))
    }
  },
  computed(){

  },
}).mount('#app')