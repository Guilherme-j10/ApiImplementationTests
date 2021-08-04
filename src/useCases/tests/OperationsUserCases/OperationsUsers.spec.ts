import { Conn } from "../../../database/knex";
import { DatabaseOperationsUser } from "../../../repositories/implementations/DatabaseOperationsUser"
import { CreateUserDTO } from "../../OperationsUser/Dtos/CreateUserDto";
import { UserOperationsUseCases } from "../../OperationsUser/UserOperationsUseCases";

describe("User Operations Tests", () => {

  let ImpOperations: DatabaseOperationsUser;
  let userOperationsServices: UserOperationsUseCases;

  beforeAll(() => {
    ImpOperations = new DatabaseOperationsUser();
    userOperationsServices = new UserOperationsUseCases(ImpOperations);
  });

  it('Should be able create user', async () => {
    const userdata: CreateUserDTO = {
      email: 'test@gmail.com',
      name: 'Teste common',
      pass: 'passTest'
    }

    const user = await userOperationsServices.CreateUser(userdata);

    expect(user[0]).toHaveProperty("id_user");
    expect(user[0].name_user).toBe('Teste common');
  });

  it('Should not be able create user', async () => {
    const userdata: CreateUserDTO = {
      email: 'testExists@gmail.com',
      name: 'Teste Exists tst',
      pass: 'passTest'
    }

    await userOperationsServices.CreateUser(userdata);

    expect(userOperationsServices.CreateUser(userdata)).rejects.toEqual(
      new Error('this user alredy exists')
    );
  });

  it('Should be able delete user', async () => {
    const userCreated = await userOperationsServices.CreateUser({
      email: 'testToDelete@gmail.com',
      name: 'Test to delete',
      pass: 'something'
    });

    expect(userOperationsServices.DeleteUser(Number(userCreated[0].id_user))).resolves.toEqual(true);
  });

  it('Not should be able delete user', async () => {
    const userCreated = await userOperationsServices.CreateUser({
      email: 'testToDelete@gmail.com',
      name: 'Test to delete',
      pass: 'something'
    });

    await userOperationsServices.DeleteUser(Number(userCreated[0].id_user));
    expect(userOperationsServices.DeleteUser(Number(userCreated[0].id_user))).rejects.toEqual(
      new Error('Probaly this register has alredy been deleted.')
    );
  })  

  afterAll(async () => {
    await ImpOperations.DeleteUser('test@gmail.com');
    await ImpOperations.DeleteUser('testExists@gmail.com');
    Conn.destroy();
  })

})