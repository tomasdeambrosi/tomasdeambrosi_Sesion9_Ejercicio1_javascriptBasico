const logger = require('./logger')

const saludar = name => {
    if (typeof name == "string") {
        return `Hola ${name}`
    }
    throw new Error("El valor ingresado no es un string")
}


try {
    console.log(saludar(99))
}
catch(e) {
    logger.log("error", e.toString());
}
finally {
    console.log("Finalizado")
}

