const historialResolver = {
    Query: {
        registroPacientes:(_, { medicoId }, {dataSources, userIdToken})=>{
            if(medicoId == userIdToken){
                return dataSources.historialAPI.registroPacientes(medicoId)
            }else{
                return null
            }
            
        },

        /**registroByDocumento: (_, { documento }, {dataSources, userIdToken}) => {
            
            return dataSources.historialAPI.registroByDocumento(documento)
        },**/
    },
    Mutation: {}
};

module.exports = historialResolver;