import { Request, Response } from "express";
import { GetTimeWorkersService } from "../../services/workers/GetTimeWorkersService";

export class GetTimeWorkersController {
    async handle(req: Request, res: Response) {

        const { workerName } = req.body;

        const service = new GetTimeWorkersService();

        const result = await service.execute({ workerName });

        return res.json(result);
    }
}