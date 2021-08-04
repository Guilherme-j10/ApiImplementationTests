import { Request, Response, Router } from 'express';
import { controllerOperations } from '../useCases/OperationsUser';
const UserRouter = Router();

UserRouter.post('/CreateUser', (req: Request, res: Response) => {
  return controllerOperations.createUser(req, res);
});

UserRouter.delete('/DeleteUser/:id', (req: Request, res: Response) => {
  return controllerOperations.deleteUser(req, res);
});

UserRouter.get('/userData/:id', (req: Request, res: Response) => {
  return controllerOperations.getUserData(req, res);
})

export { UserRouter };