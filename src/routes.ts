import {FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from 'fastify';
import { CreateUserController } from './controllers/CreateUserController';
import {ListUserController} from './controllers/ListUserController';
import {DeleteUserController} from './controllers/DeleteUserController';
import { CreatePostController } from './controllers/CreatPostController';
import { GetUserByNicknameController } from './controllers/GetUserByNicknameController';
import { GetUserJustNicknameService } from './services/GetUserJustNicknameService';
import { GetUserJustNicknameController } from './controllers/GetUserJustNicknameController';
import { DeletePostController } from './controllers/DeletePostController';


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

    fastify.post("/posts", async(request:FastifyRequest, reply:FastifyReply)=>{
        return new CreatePostController().handle(request,reply)
    })

    fastify.get("/user/:attribute1/:value1/:attribute2/:value2", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetUserByNicknameController().handle(request, reply);
    });
    fastify.get("/user/:attribute/:value", async (request: FastifyRequest, reply: FastifyReply) => {
        return new GetUserJustNicknameController().handle(request, reply);
    });

    fastify.delete("/posts", async (request: FastifyRequest, reply: FastifyReply) => {
        const { nickname, id } = request.query as { nickname: string; id: string };
        const deletePostController = new DeletePostController();
        return deletePostController.handle(request, reply);
    });

    
}