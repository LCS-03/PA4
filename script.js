$(document).ready(function() {
    let indiceActual = 0;
    const imagenes = $('.imagen');
    const total = imagenes.length;

    function mostrarImagen(indice) {
        imagenes.removeClass('activa');
        imagenes.eq(indice).addClass('activa');
    }

    function siguienteImagen() {
        indiceActual = (indiceActual + 1) % total;
        mostrarImagen(indiceActual);
    }

    setInterval(siguienteImagen, 3500);
});
