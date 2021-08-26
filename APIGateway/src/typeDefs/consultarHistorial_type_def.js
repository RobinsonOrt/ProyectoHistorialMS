const { gql } = require('apollo-server');

const consultarHistorialTypeDefs = gql`
    type Historial {
        medicoId: String!
        regNum: String
        documento: String!
        nombre: String
        apellido: String
        edad: Int
        sexo: String
        cuarto: Int
        sala: Int
        ocupacion: String
        motivoConsulta: String
        cardiovascular: String
        pulmonar: String
        digestivo: String
        diabetes: String
        renal: String
        quirurgico: String
        transfusion: String
        medicamentos: String
    }
    
    

    type Query {
        registroPacientes(medicoId: String!): [Historial]
    }
`;

module.exports = consultarHistorialTypeDefs; 