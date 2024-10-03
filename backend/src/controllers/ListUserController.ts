import { FastifyRequest, FastifyReply } from "fastify";
import {ListUsersService} from '../services/ListUsersService'

class ListUserController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const listUsersService = new ListUsersService();

        const users = await listUsersService.execute();

        reply.send(users)

    }
}
export {ListUserController};