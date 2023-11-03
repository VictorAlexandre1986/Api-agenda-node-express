const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();


class CompromissoRepository{
    async createCompromisso(userdata){
        console.log(userdata.id)
        console.log(userdata.nome)
        console.log(userdata.compromisso)
        console.log(userdata.data)
        try{
            const gravado = await prisma.compromisso.create({ data: {nome: userdata.nome, compromisso: userdata.compromisso, data: userdata.data}});
            return gravado
        }catch(e){
            throw new Error(`${e.message}`)
        }
        // return await prisma.compromisso.create({ data: {id: userdata.id, nome: userdata.nome, compromisso: userdata.compromisso, data: userdata.data}});
        
    }

    async getCompromissos(){
        return prisma.compromisso.findMany();
    }

    async getCompromissoById(id){
        return prisma.compromisso.findUnique({ where: {id:id}});
    }

    async updateCompromisso(id, userdata){
        return await prisma.compromisso.update({
            where: {id:id}, 
            data:{nome: userdata.nome, compromisso: userdata.compromisso, data: userdata.data }});
    }

    async deleteCompromisso(id){
        return prisma.compromisso.delete({where: {id:id}})
    }
}

module.exports = CompromissoRepository;