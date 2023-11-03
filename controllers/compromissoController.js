const CreateCompromissoUseCase = require('../usecases/createCompromissoUseCase');
const GetCompromissosUseCase = require('../usecases/getCompromissosUseCase');
const GetCompromissoByIdUseCase = require('../usecases/getCompromissoByIdUseCase');
const UpdateCompromissoUseCase = require('../usecases/updateCompromissoUseCase');
const DeleteCompromissoUseCase = require('../usecases/deleteCompromissoUseCase');

// Instancie os casos de uso necessários
const createCompromissoUseCase = new CreateCompromissoUseCase();
const getCompromissosUseCase = new GetCompromissosUseCase();
const getCompromissoByIdUseCase = new GetCompromissoByIdUseCase();
const updateCompromissoUseCase = new UpdateCompromissoUseCase();
const deleteCompromissoUseCase = new DeleteCompromissoUseCase();

const createCompromisso = async (req, res) => {
  try {
    const { nome, compromisso, data } = req.body;
    const compromisso1 = await createCompromissoUseCase.execute({ nome, compromisso, data });
    res.status(201).json(compromisso1);
  } catch (error) {
    // res.status(500).json({ error: error.message });
    res.status(500).json({ error: "deu erro no controller" });
  }
};

const getCompromissos = async (req, res) => {
  try {
    const compromissos = await getCompromissosUseCase.execute();
    res.json(compromissos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getCompromissoById = async (req, res) => {
  try {
    const compromissoId = parseInt(req.params.id);
    const compromisso = await getCompromissoByIdUseCase.execute(compromissoId);
    res.json(compromisso);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateCompromisso = async (req, res) => {
  try {
    const compromissoId = parseInt(req.params.id);
    const { nome, compromisso, data } = req.body;
    console.log(nome,compromisso,data)
    const compromisso1 = await updateCompromissoUseCase.execute(compromissoId, { nome, compromisso, data});
    res.json(compromisso1);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteCompromisso = async (req, res) => {
  try {
    const compromissoId = parseInt(req.params.id);
    await deleteCompromissoUseCase.execute(compromissoId);
    res.json({ message: 'Compromisso excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { createCompromisso, getCompromissos, getCompromissoById, updateCompromisso, deleteCompromisso };