let DirectivasPre = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <p v-pre> {{ pruebaPre }} </p>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-pre (Componente hijo importado)',
            message: '<b>Hola desde directivas PRE</b>',
            message: '<b>Hola desde directivas PRE</b>',
            pruebaPre: 'Directiva pre, el contenido no se renderiza',
        }
    }
}