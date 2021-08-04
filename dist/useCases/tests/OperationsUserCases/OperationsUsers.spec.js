"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const knex_1 = require("../../../database/knex");
const DatabaseOperationsUser_1 = require("../../../repositories/implementations/DatabaseOperationsUser");
const UserOperationsUseCases_1 = require("../../OperationsUser/UserOperationsUseCases");
describe("User Operations Tests", () => {
    let ImpOperations;
    let userOperationsServices;
    beforeAll(() => {
        ImpOperations = new DatabaseOperationsUser_1.DatabaseOperationsUser();
        userOperationsServices = new UserOperationsUseCases_1.UserOperationsUseCases(ImpOperations);
    });
    it('Should be able create user', async () => {
        const userdata = {
            email: 'test@gmail.com',
            name: 'Teste common',
            pass: 'passTest'
        };
        const user = await userOperationsServices.CreateUser(userdata);
        expect(user[0]).toHaveProperty("id_user");
        expect(user[0].name_user).toBe('Teste common');
    });
    it('Should not be able create user', async () => {
        const userdata = {
            email: 'testExists@gmail.com',
            name: 'Teste Exists tst',
            pass: 'passTest'
        };
        await userOperationsServices.CreateUser(userdata);
        expect(userOperationsServices.CreateUser(userdata)).rejects.toEqual(new Error('this user alredy exists'));
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
        expect(userOperationsServices.DeleteUser(Number(userCreated[0].id_user))).rejects.toEqual(new Error('Probaly this register has alredy been deleted.'));
    });
    afterAll(async () => {
        await ImpOperations.DeleteUser('test@gmail.com');
        await ImpOperations.DeleteUser('testExists@gmail.com');
        knex_1.Conn.destroy();
    });
});
