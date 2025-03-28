import prismaClient from "../prisma";

interface DeletePostProps {
    nickname: string;
    id: string;
}

class DeletePostService {
    async execute({ nickname, id }: DeletePostProps) {
        
        if (!nickname || !id) {
            throw new Error("Solicitação inválida");
        }

        
        const findUser = await prismaClient.user.findFirst({
            where: {
                nickname: nickname
            }
        });

       
        if (!findUser) {
            throw new Error("Usuário não existe");
        }

        // Encontra o post pelo id
        const findPost = await prismaClient.post.findUnique({
            where: {
                id: id
            }
        });

        // Verifica se o post existe e pertence ao usuário
        if (!findPost || findPost.userNickname !== nickname) {
            throw new Error("Post não encontrado ou não pertence ao usuário");
        }

        // Deleta o post
        await prismaClient.post.delete({
            where: {
                id: id
            }
        });

        return { message: "Post deletado com sucesso" };
    }
}

export { DeletePostService };