const { RESTDataSource } = require('apollo-datasource-rest');

const serverConfig = require('../server');

class HistorialAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = serverConfig.historial_api_url;    
  }

  /**async registroByDocumento(documento){

    return await this.get(`/historial/${documento}`);
  }**/

  async registroPacientes(medicoId){
    return await this.get(`/historiales/${medicoId}`);
  }

  async createRegistro(registrar){
    registrar = new Object(JSON.parse(JSON.stringify(registrar)));
    return await this.post('/registrar', registrar);    
  }

}

module.exports = HistorialAPI;