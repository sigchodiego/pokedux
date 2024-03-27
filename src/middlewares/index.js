
/**
 * Función que retorna otras funciones
 *
 * @param {*} store de nuestra aplicación
 * @param {*} next función que se llama cuando el middleware termina la ejecución, tambien se encarga de enviar el action al reducer
 * @param {*} action información de lo que esta pasando
 */
const logger = (store) => (next) => (action) => {
    console.log(action);
    next(action);
}

const featuring = (store) => (next) => (actionInfo) => {
    const featured = [{ name: 'Agumon' }, ...actionInfo.action.payload]
    featured.map((item, index) => item.name = (index + 1) + " " + item.name)
    const updatedAction = { ...actionInfo, action: { ...actionInfo.action, payload: featured } }
    next(updatedAction);
}

export { featuring, logger }