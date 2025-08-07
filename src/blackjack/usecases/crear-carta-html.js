/**
 * Crea un elemento de imagen HTML para una carta de juego.
 *
 * @param {String} carta - El identificador de la carta, como '3H' para tres de corazones, 'JD' para jota de diamantes.
 * @returns {HTMLImageElement} - El elemento de imagen HTML que representa la carta.
 */

export const crearCartaHtml = ( carta ) => {
     const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta;
}