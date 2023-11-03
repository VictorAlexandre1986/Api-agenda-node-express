const CompromissoRepository = require('../repository/CompromissoRepository');

class GetCompromissoByIdUseCase {
  constructor() {
    this.compromissoRepository = new CompromissoRepository();
  }

  async execute(compromissoId) {
    try {
      // Verifique se o compromisso existe no repositório com o ID fornecido.
      const compromisso = await this.compromissoRepository.getCompromissoById(compromissoId);

      if (!compromisso) {
        throw new Error('Compromisso não encontrado');
      }

      return compromisso;
    } catch (error) {

      throw new Error(`Falha ao obter o compromisso: ${error.message}`);

    }
  }
}

module.exports = GetCompromissoByIdUseCase;
