

import prismaClient from "../prisma";

interface CreatePostProps{
    title:string;
    description:string;
    gender:string;
    score:number;
    userEmail:string
}

class CreatePostService{
    async execute({title,description,gender,score,userEmail}:CreatePostProps){
        const user = await prismaClient.user.findUnique({
            where: { email: userEmail },
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
                userEmail
            },
        });

        await prismaClient.user.update({
            where:{email:userEmail},
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