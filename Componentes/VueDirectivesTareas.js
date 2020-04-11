Vue.component('vue-directives', {
    template: `<div>
        <h1 v-text="title"></h1>
        <saludarComp />
        <vModelEjercicio />
    </div>
    `,
    data () {
        return{
            title: 'Tareas',
            text: 'Tareas',
        }
    },
    components:{
        saludarComp,
        vModelEjercicio,
    }
})