import { Request, Response } from "express";
import { UpdateWorkerPathService } from "../../services/workerPath/UpdateWorkerPathService";

export class UpdateWorkerPathController {
    async handle(req: Request, res: Response){
        const { id } = req.params;
        const { folderName, folderPath, workerName, status, workerClient_id } = req.body;

        const service = new UpdateWorkerPathService();

        const result = await service.execute({ id, folderName, folderPath, workerName, status, workerClient_id });

        if(result instanceof Error)
            return res.status(400).json(result.message);

        return res.json(result);
    }
}