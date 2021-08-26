//Se llama al typedef (esquema) de cada submodulo
const registrarTypeDefs = require('./registrar_type_def');
const consultarHistorialTypeDefs = require('./consultarHistorial_type_def');
const usersTypeDefs = require('./users_type_defs');

//Se unen
const schemasArrays = [registrarTypeDefs, consultarHistorialTypeDefs, usersTypeDefs];

//Se exportan
module.exports = schemasArrays; 