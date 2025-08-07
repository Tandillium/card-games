/**
 * Calcula el valor de una carta.
 * 
 * @param {String} carta - El string que representa la carta. Ej: '3C', 'JD'
 * @returns {Number} - El valor semantico de la carta. 4 para '4C', 11 para 'JD'
 * @throws {TypeError} - Si carta no es un string
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}