import { Request, Response } from "express";
import { StartOneWorkersService } from "../../services/workers/StartOneWorkersService";

export class StartOneWorkersController {
    async handle(req: Request, res: Response) {
        const { action, name } = req.body;

        const service = new StartOneWorkersService();

        const result = await service.execute({ action, name });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(`Workers of client ${name} opened successfully`);
    }
}