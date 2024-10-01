import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';
import { CreateUserController } from './controllers/CreateUserController';
import {ListUserController} from './controllers/ListUserController';
import {DeleteUserController} from './controllers/DeleteUserController';


export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/teste", async (request:FastifyRequest, reply:FastifyReply)=>{
        return {ok:true}
    })

    fastify.post("/user", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreateUserController().handle(request,reply)
    })

    fastify.get("/users", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new ListUserController().handle(request,reply)
    })

    fastify.delete("/user", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new DeleteUserController().handle(request,reply)
    })

    
}