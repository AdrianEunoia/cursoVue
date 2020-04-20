let saludarComp = {
    template: `<div @click="upps">
        <h1 v-text="title"></h1>
        <button @click.stop="saludar">Saludar</button>
    </div>
    `,
    data () {
        return{
            title: 'Saludo para ti',
            nombre:'Adrián',
            pais: 'España',
            clickAfuera: 'No hagas clic en el botón'
        }
    },
    methods:{
        upps (){
            alert(this.clickAfuera)
        },
        saludar (){
            alert(`Hola mi nombre es ${this.nombre} y soy de ${this.pais}`)
        },
    }
}