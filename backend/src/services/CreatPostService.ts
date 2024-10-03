

import prismaClient from "../prisma";

interface CreatePostProps{
    title:string;
    description:string;
    gender:string;
    score:number;
    userNickname:string
}

class CreatePostService{
    async execute({title,description,gender,score,userNickname}:CreatePostProps){
        const user = await prismaClient.user.findUnique({
            where: { nickname: userNickname },
          });
      
          if (!user) {
            throw new Error('Usuário não encontrado');
          }

        const post = await prismaClient.post.create({
            data:{
                title,
                description,
                gender,
                score,
                userNickname
            },
        });

        await prismaClient.user.update({
            where:{nickname:userNickname},
            data:{
                posts:{
                    connect:{id:post.id}
                },
            },
        });

        return post;
    }
    
}

export {CreatePostService}