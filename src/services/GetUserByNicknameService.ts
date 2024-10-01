import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface GetUserProps{
    nickname:string;
}

class GetUserByNicknameService{
    async execute({nickname}:GetUserProps) {
        const user = await prismaClient.user.findUnique({
            where:{
                email:nickname,
            },
            include: {
                posts: true, // Inclui os posts relacionados ao usuário
              },
        });

        if(!user){
            throw new Error("usuário não encontrado")
        }
        return user;
        
    }
}

export {GetUserByNicknameService};