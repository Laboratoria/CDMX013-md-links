 // console.log(process.env);

// const nombre = "delia";
// const apellido = "diaz"
// console.log (nombre, apellido);

// let a = require("./foo");
// console.log(a);

function saludar(nombre) {
    return `hola ${nombre}`;
}

function saludarHolaMundo() {
    return 'Hola Mundo';
}
 // const saludar = "delia";
// console.log(module.exports);
// module.exports.saludar = saludar;  
// module.exports.saludarHolaMundo = saludarHolaMundo;

module.exports = {
 saludar: saludar,
 saludarHolaMundo: saludarHolaMundo,
};

 // console.log(module.exports);
