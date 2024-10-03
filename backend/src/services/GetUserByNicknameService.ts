import { PrismaClient } from "@prisma/client";
import prismaClient from "../prisma";

interface GetUserProps {
    nickname: string;
    senha: string;
}

class GetUserByNicknameService {
    async execute({ nickname, senha }: GetUserProps) {
        if (!nickname) {
            throw new Error("Nickname is required");
        }
        
        // Busca o usuário pelo nickname
        const user = await prismaClient.user.findUnique({
            where: {
                nickname: nickname,
            },
            include: {
                posts: true, // Inclui os posts relacionados ao usuário
            },
        });

        // Verifica se o usuário foi encontrado
        if (!user) {
            throw new Error("Usuário não encontrado");
        }

        // Verifica se a senha está correta
        if (user.senha !== senha) {
            throw new Error("Senha incorreta");
        }

        return user;
    }
}

export { GetUserByNicknameService };