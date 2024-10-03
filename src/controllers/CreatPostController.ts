import { FastifyRequest, FastifyReply } from "fastify";
import {CreatePostService} from '../services/CreatPostService'

class CreatePostController{
    async handle(request:FastifyRequest, reply:FastifyReply){

        const{title,description,gender,score,userNickname}=request.body as {title:string,description:string,gender:string,score:number,userNickname:string};

        const postService = new CreatePostService()

        const post = await postService.execute({title,description,gender,score,userNickname});

        reply.send(post)

    }
}

export{CreatePostController};