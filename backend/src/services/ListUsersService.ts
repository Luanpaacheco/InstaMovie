import prismaClient from "../prisma";

class ListUsersService{
    async execute(){
        const users = await prismaClient.user.findMany({
            include: {
                posts: true, // Inclui os posts relacionados ao usuário
              },
        })

        return users;
    }

}
export {ListUsersService};