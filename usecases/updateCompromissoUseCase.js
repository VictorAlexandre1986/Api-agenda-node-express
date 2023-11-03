const CompromissoRepository = require('../repository/CompromissoRepository');

class UpdateCompromissoUseCase {
  constructor() {
    this.compromissoRepository = new CompromissoRepository();
  }

  async execute(compromissoId, userData) {
    try {
      // Verifique se o usuário existe no repositório com o ID fornecido.
      const existingCompromisso = await this.compromissoRepository.getCompromissoById(compromissoId);

      if (!existingCompromisso) {
        throw new Error('Compromisso não encontrado');
      }

      // Atualize os campos de dados do usuário.
      const updatedCompromisso = await this.compromissoRepository.updateCompromisso(compromissoId, userData);

      return updatedCompromisso;

    } catch (error) {

      throw new Error(`Falha ao atualizar o compromisso: ${error.message}`);

    }
  }
}

module.exports = UpdateCompromissoUseCase;
