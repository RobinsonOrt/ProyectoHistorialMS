const historialResolver = require('./consultarHistorial_resolver');
const registrarResolver = require('./registrar_resolver');
const userResolver = require('./users_resolver');

const lodash = require('lodash');

const resolvers = lodash.merge(historialResolver, registrarResolver, userResolver);

module.exports = resolvers;