// Esta función me permite tomar una carta

/**
 * Retira una carta del mazo.
 * 
 * @param {Array<String>} deck - Arreglo que representa el mazo de cartas.
 * @returns {String} - La carta retirada del mazo.
 * @throws {Error} - Lanza un error si el mazo está vacío.
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}