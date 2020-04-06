let DirectivasIf = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-show="mostrar" v-html="message"></p>
        <p v-if="user.permission && user.vip" v-html="messageOculto"></p>
        <p v-else-if="!user.permission && user.vip" v-html="messageOcultoSoloVIP"></p>
        <p v-else-if="!user.permission && !user.vip" v-html="messageOcultoSoloVIP"></p>
        <p v-else-if v-html="messageOcultoPermisos"></p>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-if (Componente hijo importado)',
            message: '<b>Hola desde directivas IF</b>',
            messageOculto: '<b>El usuario tiene permiso para ver este mensaje</b>',
            messageOcultoVIP: '<b>El usuario tiene permiso para ver este mensaje y el usuario es VIP</b>',
            messageOcultoSoloVIP: '<b>El usuario no tiene permiso para ver este mensaje pero es VIP</b>',
            messageOcultoPermisos: '<b>El usuario no tiene permiso para ver este mensaje ni es VIP</b>',
            mostrar: true,
            user: {
                permission: false,
                vip: true,
            }
        }
    }
}