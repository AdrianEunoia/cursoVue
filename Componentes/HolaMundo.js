Vue.component('hola-mundo', {
    template: `<header>
        <h1>{{ titulo }}</h1>
        <h3>{{ message }}</h3>
    </header>,`,
    data () {
        return {
            titulo: 'Hola mundo desde un componente',
            message: 'Bienvenido al curso de Vue js'
        }
    }
})