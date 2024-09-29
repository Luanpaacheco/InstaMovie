import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';
import { request } from 'http';
import { CreateUserController } from './controllers/CreateUserController';

export async function routes(fastify:FastifyInstance, options:FastifyPluginOptions){
    fastify.get("/teste", async (request:FastifyRequest, reply:FastifyReply)=>{
        return {ok:true}
    })

    fastify.post("/user", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreateUserController().handle(request,reply)
    })
}