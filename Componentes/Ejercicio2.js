let vModelEjercicio = {
    template: `<div>
        <h1 v-text="title"></h1>
        <h2>Peliculas</h2>
            <label v-for="(pelicula, index) in peliculas" :key="index">
                <input :value="pelicula" type="checkbox" v-model="favoritesMovies">
                {{ pelicula }}
            </label>
            <div v-show="favoritesMovies.length > 0">
            <h2>Peliculas favoritas</h2>
                <ul>
                    <li v-for="(pelicula, index) in favoritesMovies" :key="index" v-text="pelicula"></li>
                </ul>
            </div>
    </div>
    `,
    data () {
        /* La forma es interesante porque a traves de v-model actualizas la lista de peliculas favoritas */
        /* Fixear el actualizar la lista */
        return{
            title: 'Ejercicio V-MODEL',
            message: '<b>Hola desde directivas MODEL</b>',
            inputText: 'Data del input',
            mostrar: true,
            peliculas: ['Buscando a Nemo','Titanic','Avatar'],
            favoritesMovies: []
        }
    },
}