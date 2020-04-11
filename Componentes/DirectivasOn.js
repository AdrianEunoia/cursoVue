let DirectivasOn = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <button v-on:click="decirHola">Dame click</button>
        <button v-on:click="decirHolaArrow">Dame click arrow function</button>
        <button @click.stop="comprarEntrada">Comprar entrada</button>
        <p>Entradas disponibles para <span v-text="this.pelicula"></span><span v-text="this.entradas"></span></p>
        <input type="text" @keydown="decirHola"></input>
        <div>
            <h1>Modificando vista y modelo</h1>
            <input type="text" :value="textInput" @keyup="updateDataInputText">
        </div>
    </div>
    `,
    /* El metodo .stop en la función v-on hace que no se propague hacía arriba, es decir, en nuestro caso si hago click en comprar entrada 
    sin el metodo stop la secuencia sería, comprar la entrada y luego llamar a la función que tiene el div, pero con .stop se limita a ejecutar
    la funcion donde yo le he indicado */
    /* Interesante seguir mas modificadores */
    data () {
        return{
            title: 'Directiva v-show (Componente hijo importado)',
            message: '<b>Hola desde directivas SHOW</b>',
            welcomeText: 'Bienvenido desde data',
            welcomeTextArrow: 'Bienvenido desde data con arrow function',
            pelicula: 'Dora la exploradora ',
            entradas: 5,
            textInput: 'Valor por defecto del input',
        }
    },
    methods:{
        decirHola (){
            alert('Hola desde metodo por click!')
            alert(this.welcomeText)
        },
        decirHolaArrow: () => {
            alert('Hola desde metodo por click!')
            alert(this.welcomeTextArrow)
        },
        comprarEntrada (){
            if(this.entradas > 0){
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            }else{
                return alert('No hay entradas para la pelicula')
            }
        },
        updateDataInputText (event){
            this.textInput = event.target.value
        }
    }
}