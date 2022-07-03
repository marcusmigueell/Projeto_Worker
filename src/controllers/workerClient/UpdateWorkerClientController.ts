import { Request, Response } from "express";
import { UpdateWorkerClientService } from "../../services/workerClient/UpdateWorkerClientService";

export class UpdateWorkerClientController {
    async handle(req: Request, res: Response) {
        const { id } = req.params;
        const { name, status } = req.body;

        const service = new UpdateWorkerClientService();

        const result = await service.execute({ id, name, status });

        if(result instanceof Error) return res.status(400).json(result.message);

        return res.json(result);
    }
}