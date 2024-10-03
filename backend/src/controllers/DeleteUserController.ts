import { FastifyRequest, FastifyReply } from "fastify";
import {DeleteUserService} from '../services/DeleteUserService';    
    
class DeleteUserController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {nickname}= request.query as {nickname:string}
        const userService= new DeleteUserService();

        const user=await userService.execute({nickname})

        reply.send(user);
    }
    }
export {DeleteUserController};