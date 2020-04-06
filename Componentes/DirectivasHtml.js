let DirectivasHtml = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-html (Componente hijo importado)',
            message: '<b>Hola desde directivas HTML</b>',
        }
    }
}