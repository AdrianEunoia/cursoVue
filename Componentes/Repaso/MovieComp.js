let MovieComp = {
    template: `
        <div>
            <h1>Pelicula: </h1>
            <h2 v-text="title"></h2>
            <p v-text="synopsis"></p>
            <img :src="cover"/>
            <br> 
            <button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a favorita'"></button>
            <hr>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        synopsis: {
            type: String,
            default: 'No posee synopsis',
        },
        cover: {
            type: String,
            required: true,
        },
        like:{
            type: Boolean,
            required: true,
            default (){
                return false
            }
        }
    },
    methods: {
        toggleLike(){
            let movie = this.$parent.movies.find(movie => movie.id == this.id)
            movie.like = !this.like
            this.$parent.showFav = !this.like
            this.$parent.decirHola();
        }
    }
}