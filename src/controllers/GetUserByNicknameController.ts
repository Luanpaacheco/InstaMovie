import { FastifyRequest, FastifyReply } from "fastify";
import {GetUserByNicknameService} from '../services/GetUserByNicknameService'

class GetUserByNicknameController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const{nickname, value}=request.params as {nickname:string, value:string};
        const GetByService= new GetUserByNicknameService()
        const user = await GetByService.execute({ nickname:value });

        reply.send(user)
    }
}

export {GetUserByNicknameController};
