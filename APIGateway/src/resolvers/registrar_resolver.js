const registrarResolver = {
    Query: {},

    Mutation: {
        createRegistro: (_, {registrar}, {dataSources, userIdToken}) => {
            if(registrar.medicoId == userIdToken){
                return dataSources.historialAPI.createRegistro(registrar)
            }else{
                return null
            }
        }
        
    }
};


module.exports = registrarResolver;