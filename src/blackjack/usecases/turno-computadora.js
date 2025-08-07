import { crearCartaHtml, pedirCarta, valorCarta } from ".";


/**
 * Turno de la computadora, pide cartas del mazo hasta tener >= a puntosMinimos.
 * 
 * @param {Number} puntosMinimos - Puntos minimos para la computadora.
 * @param {HTMLElement} puntosHTML - Elemento que muestra los puntos de la computadora.
 * @param {Array<String>} [deck=[]] - Arreglo que representa el mazo de cartas.
 * @param {HTMLElement} [divCartasComputadora] - Elemento que muestra las cartas de la computadora.
 * 
 * @throws {Error} - Lanza un error si no se pasa como par metro puntosMinimos, deck o puntosHTML.
 * @returns {void} - No devuelve nada.
 */
const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if (!puntosMinimos) throw new Error('Puntos minimos son necesarios');
    if (!deck) throw new Error('Deck es necesario');
    if (!puntosHTML) throw new Error('Puntos HTML son necesarios');
    
    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        // <img class="carta" src="assets/cartas/2C.png">
        const imgCarta = crearCartaHtml( carta );
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

export {
    turnoComputadora
}