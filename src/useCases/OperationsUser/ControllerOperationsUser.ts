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

}