Vue.component('computedproperties', {
    template: `<div>
        <h1 v-text="title"></h1>
        <p> {{ fullName }} </p>
        <p> {{ calculoEdad }} </p>
        <p> {{ metodoFullName() }} </p>
    </div>
    `,
    data () {
        return{
            title: 'Computed Properties',
            user: {
                name: 'Adrian',
                lastName: 'Garcia',
                edad: 1996
            }
        }
    },
    computed:{
        fullName () {
            return `${this.user.name} ${this.user.lastName}`
        },
        calculoEdad (){
            let fecha = new Date()
            let añoActual = fecha.getFullYear();
            return añoActual - this.user.edad
        }
    },
    methods:{
        metodoFullName () {
            return `${this.user.name} ${this.user.lastName}`
        }
    }
})