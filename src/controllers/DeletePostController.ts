import { FastifyRequest, FastifyReply } from "fastify";
import { DeletePostService } from '../services/DeletePostService';

class DeletePostController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { nickname, id } = request.query as { nickname: string; id: string };

        const deletePostService = new DeletePostService();

        
            const result = await deletePostService.execute({ nickname, id });
            reply.send(result);
        
    }
}

export { DeletePostController };
