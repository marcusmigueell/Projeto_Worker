import { Request, Response } from "express";
import { CreateWorkerClientService } from "../../services/workerClient/CreateWorkerClientService";

export class CreateWorkerClientController {
    async handle(req: Request, res: Response) {
        const { name, status } = req.body;

        const service = new CreateWorkerClientService();

        const result = await service.execute({ name, status });

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}