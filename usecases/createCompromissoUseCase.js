const Compromisso = require('../entities/Compromisso');
const CompromissoRepository = require('../repository/CompromissoRepository');

class CreateCompromissoUseCase{
    constructor(){
        this.compromissoRepository = new CompromissoRepository();
    }

    async execute(data){
        
        try{
            //Valide os dados de entrada, por exemplo,   
            if(!data.nome || !data.compromisso || !data.data ){
                throw new Error('os campos nome,compromisso,data e hora são obrigatórios');
            }


            // Verifique se o usuário já existe com o mesmo e-mail.
            // const existingCompromisso = await this.compromissoRepository.getCompromissoById(data.data);
            // if (existingCompromisso) {
            //     throw new Error('Esse compromisso nessa data já existe.');
            // }
            
            // Cria um novo objeto compromisso
            const compromisso = new Compromisso(null, data.nome, data.compromisso, data.data);

            //Cria o usuário no repositório
            const criandoCompromisso = await this.compromissoRepository.createCompromisso(compromisso);
            
            return criandoCompromisso;

        }catch(erro){
            throw new Error(`Falha ao criar o compromisso ${error.message}`)
        }
    }
}

module.exports = CreateCompromissoUseCase;