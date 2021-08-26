const { gql } = require('apollo-server');

const registrarTypeDefs = gql`
    type Registrar {
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
    
    input RegistrarInput {
        medicoId: String
        regNum: String
        documento: String
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


    type Mutation {
        createRegistro(registrar: RegistrarInput!): Registrar
    }
`;

module.exports = registrarTypeDefs; 