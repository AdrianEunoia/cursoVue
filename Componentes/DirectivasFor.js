let DirectivasFor = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <h3>Lista de un array</h3>
        <ul>
            <li v-for="(color, index) in list" :key="index" v-text="color">
            </li>
        </ul>
        <h3>Lista de un objeto</h3>
        <ul>
            <li v-for="(itemObject, key, index) in objectList" :key="index">
            {{ key }} : {{ itemObject }}
            </li>
        </ul>
        <h3>Lista de un array con objetos</h3>
        <ul>
            <li v-for="(itemObject, key, index) in objectMulti" :key="index">
            Nombre : {{ itemObject.nombre }}, <br> Edad: {{ itemObject.edad }}
            </li>
        </ul>
    </div>`,
    data () {
        return{
            title: 'Directiva v-for  (Componente hijo importado)',
            message: '<b>Hola desde directivas FOR</b>',
            list: ['Rojo','Amarillo','Azul','Purpura','Rosa'],
            objectList: {
                nombre: 'Jesusi',
                apellido: 'Suneo',
                edad: 69
            },
            objectMulti: [
                {
                    nombre: 'Jesusi',
                    apellido: 'Suneo',
                    edad: 69
                },
                {
                    nombre: 'Adri',
                    apellido: 'Garcia',
                    edad: 70
                },
                {
                    nombre: 'Kerry',
                    apellido: 'Coppo Jon',
                    edad: 72
                }, 
            ]
        }
    }
}