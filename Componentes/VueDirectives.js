Vue.component('vue-directives', {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-text="text"></p>
        <a v-text="link.text" :href="link.href" :title="link.title"></a>
        <DirectivasHtml />
        <DirectivasShow />
        <DirectivasIf />
        <DirectivasFor />
        <DirectivasOn />
        <DirectivasVmodel />
    </div>
    `,
    data () {
        return{
            title: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion de vue JS'
            }
        }
    },
    components:{
        DirectivasHtml,
        DirectivasShow,
        DirectivasIf,
        DirectivasFor,
        DirectivasOn,
        DirectivasVmodel,
    }
})