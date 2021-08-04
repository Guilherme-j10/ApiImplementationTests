import { Request, Response } from "express";
import { UserOperationsUseCases } from "./UserOperationsUseCases";

export class ControllerOperationsUser {

  constructor(
    private useCaseOperationsUser: UserOperationsUseCases
  ){}

  async createUser(req: Request, res: Response): Promise<Response>{
    const { email, name, pass } = req.body;

    try {

      const result = await this.useCaseOperationsUser.CreateUser({
        name: name,
        email: email,
        pass: pass
      });

      return res.json(result);

    } catch (error) {
      return res.json({
        error: true,
        message: error.message || 'Unxpected error'
      })
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response>{
    try {
      return res.json((await this.useCaseOperationsUser.DeleteUser(Number(req.params.id))));
    } catch (error) {
      return res.json({
        error: true,
        message: error.message
      })
    }
  }

  async getUserData(req: Request, res: Response): Promise<Response>{
    try {
      return res.json((await this.useCaseOperationsUser.SelectUser(Number(req.params.id))));
    } catch (error) {
      return res.json({
        error: true,
        message: error.message
      })
    }
  }

}