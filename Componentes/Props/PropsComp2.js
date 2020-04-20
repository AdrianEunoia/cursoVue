Vue.component('propcomps', {
    template: `<div>
        <h1>Películas Props</h1>
        <MovieComp2 v-for="(movie, key) in movies" 
        :key="key" 
        :id="movie.id" 
        :title="movie.title" 
        :synopsis="movie.synopsis" 
        :cover="movie.cover"
        :like="movie.like"
        @toggleLike="onToggleLike"
        />
        <MovieFav v-if="showLike"/>
    </div>
    `,
    data () {
        return {
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    like: false
                }
            ],
            showLike: false
        }
    },
    components :{
        MovieComp2,
        MovieFav
    },
    methods:{
        onToggleLike (data){
            let movieEncontrar = this.movies.find(movie => movie.id == data.id)
            movieEncontrar.like = data.like
            this.showLike = data.like;
            setTimeout( () => {
                this.showLike = false
            }, 1000)
            if(data.like){
                //alert(`La pelicula ${movieEncontrar.title} ha sido añadida a favoritos`)
            }else{
                //alert(`La pelicula ${movieEncontrar.title} ha sido descartada de favoritos`)
            }
        }
    }
})