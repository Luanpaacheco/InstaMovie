import prismaClient from "../prisma";

interface CreateUserProps{
    name:string;
    email:string;
}

class CreateUserService{
    async execute({name,email}:CreateUserProps){
        if(!name||!email){
            throw new Error("preencha todos os campos")
        }

        const user = await prismaClient.user.create({
            data:{
                name,
                email,
            }
        })

        return user
    }
    
}

export {CreateUserService}