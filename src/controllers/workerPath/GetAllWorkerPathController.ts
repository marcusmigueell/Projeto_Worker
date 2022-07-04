import { Request, Response } from "express";
import { GetAllWorkerPathService } from "../../services/workerPath/GetAllWorkerPathService";

export class GetAllWorkerPathController {
    async handle(req: Request, res: Response) {
        const service = new GetAllWorkerPathService();

        const result = await service.execute();

        return res.json(result);
    }
}