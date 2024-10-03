import prismaClient from "../prisma";

interface CreateUserProps{
    senha:string;
    nickname:string;
}

class CreateUserService{
    async execute({senha,nickname}:CreateUserProps){
        if(!senha||!nickname){
            throw new Error("preencha todos os campos")
        }
        const testeUser = await prismaClient.user.findUnique({
            where:{
                nickname:nickname
            }
        })
        if(testeUser){
            throw new Error("nickname ja cadastrado")
        }

        const user = await prismaClient.user.create({
            data:{
                senha,
                nickname,
            }
        })

        return user
    }
    
}

export {CreateUserService}