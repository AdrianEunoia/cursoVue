let DirectivasOnce = {
    template: `<div>
        <h1 v-text="title" v-once></h1>
        <p v-html="message"></p>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-once (Componente hijo importado)',
            message: '<b>Hola desde directivas ONCE</b>',
        }
    },
    components: {
        buttonComp,
    }
}
/* v-once le indica al elemento que sólo escuchará, es decir, será reactivo unicamente en el render */