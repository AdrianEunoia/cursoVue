let DirectivasVmodel = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <input type="text" v-model="inputText">
        <h2>Tipo Checkbox</h2>
        <label>
            <input type="checkbox" v-model="checked">
        </label>
        <h2>Peliculas</h2>
        <label v-for="(pelicula, index) in peliculas" :key="index">
                <input :value="pelicula" type="checkbox" v-model="favoritesMovies">
                {{ pelicula }}
            </label>
        <h2>Peliculas favoritas</h2>
        <label v-for="(pelicula, indexFavs) in favoritesMovies" :key="indexFavs">
                {{ pelicula }}
            </label>
        </div>
    `,
    data () {
        /* La forma es interesante porque a traves de v-model actualizas la lista de peliculas favoritas */
        /* Fixear el actualizar la lista */
        return{
            title: 'Directiva v-model (Componente hijo importado)',
            message: '<b>Hola desde directivas MODEL</b>',
            inputText: 'Data del input',
            checked: false,
            peliculas: ['Buscando a Nemo','Titanic','Avatar'],
            favoritesMovies: []
        }
    }
}