import { Request, Response } from "express";
import { CreateWorkerPathService } from "../../services/workerPath/CreateWorkerPathService";

export class CreateWorkerPathController {
    async handle(req: Request, res: Response) {
        const { folderName, folderPath, workerName, status, workerClient_id } = req.body;

        const service = new CreateWorkerPathService();

        const result = await service.execute({ folderName, folderPath, workerName, status, workerClient_id });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(result);
    }
}