import { Request, Response } from "express";
import { KillAllWorkersService } from "../../services/workers/KillAllWorkersService";

export class KillAllWorkersController {
    async handle(req: Request, res: Response){
        const { action } = req.body;

        const service = new KillAllWorkersService();

        const result = await service.execute({ action });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json("Workers closed successfully");
    }
}


