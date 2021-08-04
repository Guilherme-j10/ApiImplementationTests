import { User } from "../../entities/User";
import { IUserRespositories } from "../../repositories/IUserRespositories";
import { CreateUserDTO } from "./Dtos/CreateUserDto";

export class UserOperationsUseCases {
  
  constructor(
    private useIinterfaceRespositorie: IUserRespositories
  ){}

  async CreateUser(data: CreateUserDTO){

    const userExists = await this.useIinterfaceRespositorie.findByEmail(data.email);

    if(userExists.length > 0){
      throw new Error('this user alredy exists');
    }

    const user = new User({
      email_user: data.email,
      name_user: data.name,
      password_user: data.pass
    });

    return this.useIinterfaceRespositorie.findById(
      (await this.useIinterfaceRespositorie.CreateUser(user))[0]
    );
  }

  async DeleteUser(id: number){
    const result = await this.useIinterfaceRespositorie.DeleteUserById(id);

    if(result){
      return true;
    }

    throw new Error('Probaly this register has alredy been deleted.');
  }

  async SelectUser(id: number){
    const result = await this.useIinterfaceRespositorie.SelectUserBy('id_user', id);
    return result;
  }

}