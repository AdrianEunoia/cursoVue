let buttonComp = {
    template: `<button>
        <slot name="action">Abrir</slot>
        <slot name="element">Ventana</slot>
    </button>`
}
/* La etiqueta slot nos va a permitir escribir contenido en nuestro componente una vez invocado */