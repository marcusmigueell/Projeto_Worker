import { Request, Response } from "express";
import { StartAllWorkersService } from "../../services/workers/StartAllWorkersService";

export class StartAllWorkersController {
    async handle(req: Request, res: Response){
        const { action } = req.body;

        const service = new StartAllWorkersService();

        const result = await service.execute({ action });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json("Workers opened successfully");
    }
}