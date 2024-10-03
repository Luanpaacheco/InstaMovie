import prismaClient from "../prisma";

interface DeleteUseProps{
    nickname:string;
}

class DeleteUserService{
    async execute({nickname}:DeleteUseProps){
        if(!nickname){
            throw new Error("Solicitação invalida")
        }

        const findUser= await prismaClient.user.findFirst({
            where:{
                nickname: nickname
            }
        })

        if(!findUser){
            throw new Error("usuario não existe")
        }

        await prismaClient.user.delete({
            where:{
                nickname:findUser.nickname
            }
        })

        return {messege:"deletado com sucesso"}
    }
}
export {DeleteUserService};