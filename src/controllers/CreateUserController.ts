import { FastifyRequest, FastifyReply } from "fastify";
import {CreateUserService} from '../services/CreateUserService'

class CreateUserController{
    async handle(request:FastifyRequest, reply:FastifyReply){

        const{senha,nickname}=request.body as {senha:string, nickname:string};

        const userService = new CreateUserService()

        const user = await userService.execute({senha,nickname});

        reply.send(user)

    }
}

export{CreateUserController};