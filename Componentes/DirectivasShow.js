let DirectivasShow = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-show="mostrar" v-html="message"></p>
        <p v-show="user.permission" v-html="messageOculto"></p>
        <p v-show="!user.permission" v-html="messageOcultoPermisos"></p>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-show (Componente hijo importado)',
            message: '<b>Hola desde directivas SHOW</b>',
            messageOculto: '<b>El usuario tiene permiso para ver este mensaje</b>',
            messageOcultoPermisos: '<b>El usuario no tiene permiso para ver este mensaje</b>',
            mostrar: true,
            user: {
                permission: false
            }
        }
    }
}