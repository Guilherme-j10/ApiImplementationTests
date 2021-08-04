import { Conn } from "../../database/knex";
import { User } from "../../entities/User";
import { IUserRespositories } from "../IUserRespositories";

export class DatabaseOperationsUser implements IUserRespositories {

  async findByEmail(email: String): Promise<User[]> {
    return await Conn.select().from('users').where({ email_user: email });
  }

  async findById(Id: number): Promise<User[]> {
    return await Conn.select().from('users').where({ id_user: Id });
  }

  async CreateUser(data: User): Promise<number[]> {
    return await Conn('users').insert({
      name_user: data.name_user,
      email_user: data.email_user,
      password_user: data.password_user
    });
  }

  async DeleteUser(email: String): Promise<boolean> {
    const response = await Conn('users').where({ email_user: email }).delete();
    if(response){
      return true;
    }

    return false;
  }

}