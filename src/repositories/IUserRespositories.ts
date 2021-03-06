import { User } from "../entities/User";

export interface IUserRespositories {
  findByEmail(email: String): Promise<User[]>;
  findById(Id: number): Promise<User[]>;
  CreateUser(data: User): Promise<number[]>;
  DeleteUser(email: String): Promise<boolean>;
  DeleteUserById(id: number): Promise<boolean>;
  SelectUserBy(Place: String, Value: String | Number): Promise<User[]>;
}