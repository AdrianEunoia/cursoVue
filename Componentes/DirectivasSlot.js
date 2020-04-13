let DirectivasSlot = {
    template: `<div>
        <h1 v-text="title"></h1>
        <p v-html="message"></p>
        <buttonComp>
            <template #element>Algo</template>
        </buttonComp>
    </div>
    `,
    data () {
        return{
            title: 'Directiva v-slot (Componente hijo importado)',
            message: '<b>Hola desde directivas SLOT</b>',
        }
    },
    components: {
        buttonComp,
    }
}