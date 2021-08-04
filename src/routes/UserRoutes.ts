import { Request, Response, Router } from 'express';
import { controllerOperations } from '../useCases/OperationsUser';
const UserRouter = Router();

UserRouter.post('/CreateUser', async (req: Request, res: Response) => {
  return controllerOperations.createUser(req, res);
});

export { UserRouter };