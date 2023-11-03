const CompromissoRepository = require('../repository/CompromissoRepository');

class DeleteCompromissoUseCase {
  constructor() {
    this.compromissoRepository = new CompromissoRepository();
  }

  async execute(compromissoId) {
    try {
      // Verifique se o usuário existe no repositório com o ID fornecido.
      const existingCompromisso = await this.compromissoRepository.getCompromissoById(compromissoId);

      if (!existingCompromisso) {
        throw new Error('Compromisso não encontrado');
      }

      // Exclua o usuário do repositório.
      await this.compromissoRepository.deleteCompromisso(compromissoId);

      return { message: 'Compromisso excluído com sucesso' };

    } catch (error) {

      throw new Error(`Falha ao excluir o compromisso: ${error.message}`);
      
    }
  }
}

module.exports = DeleteCompromissoUseCase;
