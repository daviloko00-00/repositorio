import { Telefone } from "../models/Telefones.js";
import telefoneRepository from "../repositories/telefoneRepository.js";

const telefoneController = {

    criar: async (req, res) => {
        try {
            const { idCliente, numero } = req.body;

            // validação básica
            if (idCliente == null || numero == null) {
                return res.status(400).json({
                    message: "idCliente e numero são obrigatórios"
                });
            }

            const telefone = Telefone.criar({ idCliente, numero });

            console.log("DEBUG TELEFONE:", telefone);

            const result = await telefoneRepository.criar(telefone);

            return res.status(201).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Erro no servidor",
                errorMessage: error.message
            });
        }
    },

    selecionar: async (req, res) => {
        try {
            const result = await telefoneRepository.selecionar();
            return res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Erro no servidor",
                errorMessage: error.message
            });
        }
    },

    atualizar: async (req, res) => {
        try {
            const { idCliente, numero } = req.body;
            const id = Number(req.query.id);

            if (!id || isNaN(id)) {
                return res.status(400).json({ message: "ID inválido" });
            }

            const telefone = Telefone.editar(
                { idCliente, numero },
                id
            );

            const result = await telefoneRepository.editar(telefone);

            return res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Erro no servidor",
                errorMessage: error.message
            });
        }
    },

    deletar: async (req, res) => {
        try {
            const id = Number(req.params.id);

            if (!id || isNaN(id)) {
                return res.status(400).json({ message: "ID inválido" });
            }

            const result = await telefoneRepository.deletar(id);

            return res.status(200).json({ result });

        } catch (error) {
            console.log(error);
            res.status(500).json({
                message: "Erro no servidor",
                errorMessage: error.message
            });
        }
    }
};

export default telefoneController;