const CompromissoRepository = require('../repository/CompromissoRepository');

class GetCompromissosUseCase {
  constructor() {
    this.compromissoRepository = new CompromissoRepository();
  }

  async execute() {
    try {
    //   Todos os compromissos.
      const compromissos = await this.compromissoRepository.getCompromissos();

      return compromissos;
    } catch (error) {
      throw new Error(`Falha ao obter o compromisso: ${error.message}`);
    }
  }
}

module.exports = GetCompromissosUseCase;
