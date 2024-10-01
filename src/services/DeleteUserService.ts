import prismaClient from "../prisma";

interface DeleteUseProps{
    id:string;
}

class DeleteUserService{
    async execute({id}:DeleteUseProps){
        if(!id){
            throw new Error("Solicitação invalida")
        }

        const findUser= await prismaClient.user.findFirst({
            where:{
                id: id
            }
        })

        if(!findUser){
            throw new Error("usuario não existe")
        }

        await prismaClient.user.delete({
            where:{
                id:findUser.id
            }
        })

        return {messege:"deletado com sucesso"}
    }
}
export {DeleteUserService};