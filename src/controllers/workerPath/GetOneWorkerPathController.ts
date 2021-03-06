import { Request, Response } from "express";
import { GetOneWorkerPathService } from "../../services/workerPath/GetOneWorkerPathService";

export class GetOneWorkerPathController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;

        const service = new GetOneWorkerPathService();

        const result = await service.execute({ id });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(result);
    }
}