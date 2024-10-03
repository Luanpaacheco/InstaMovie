import { FastifyRequest, FastifyReply } from "fastify";
import { GetUserByNicknameService } from '../services/GetUserByNicknameService';

class GetUserByNicknameController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { attribute1, value1, attribute2, value2 } = request.params as {
            attribute1: string;
            value1: string;
            attribute2: string;
            value2: string;
        };
        const nickname = value1; 
        const senha = value2;

        const getByService = new GetUserByNicknameService();
        const user = await getByService.execute({ nickname, senha });

        reply.send(user);
    }
}

export { GetUserByNicknameController };