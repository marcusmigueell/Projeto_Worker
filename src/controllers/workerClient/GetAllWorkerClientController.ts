import { Request, Response } from "express";
import { GetAllWorkerClientService } from "../../services/workerClient/GetAllWorkerClientService";

export class GetAllWorkerClientController {
    async handle(req: Request, res: Response) {
        const service = new GetAllWorkerClientService();

        const workerClients = await service.execute();

        return res.json(workerClients);
    }
}