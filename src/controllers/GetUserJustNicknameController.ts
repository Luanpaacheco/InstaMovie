import { FastifyRequest, FastifyReply } from "fastify";
import { GetUserJustNicknameService } from '../services/GetUserJustNicknameService';
import e from "express";

class GetUserJustNicknameController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { value } = request.params as { value: string; };
        const nickname = value;
    
        const getByService = new GetUserJustNicknameService();

        const user = await getByService.execute({ nickname });
         reply.send(user);
        
    }
    
}

export { GetUserJustNicknameController };