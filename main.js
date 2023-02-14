const { createApp } = Vue

createApp({
  data() {
    return {
      mensaje: 'Vue.Js',
      personajes: [],
      nombre: "",
      personajesFiltrados:[],
      nombresDeCasas: [],
      housesSeleccionadas: []
    }
  },
  created() {
    fetch ("https://hp-api.onrender.com/api/characters")
    .then (response => response.json())
    .then(data =>{
        this.personajes = data
        this.personajesFiltrados = this.personajes
        this.obtenerNombreDeCasas()
    })
},
mounted(){
      

  },
  methods:{
     filtrarPorNombre(){
        this.personajesFiltrados = this.personajes.filter(personaje=>
            personaje.name.toLowerCase().includes(this.nombre.toLowerCase()))
    },

      obtenerNombreDeCasas(){
        this.nombresDeCasas = this.personajesFiltrados.map(
          personaje => personaje.house)
      
      this.nombresDeCasas = new Set (this.nombresDeCasas)
    }


  },
  computed(){

  },
}).mount('#app')