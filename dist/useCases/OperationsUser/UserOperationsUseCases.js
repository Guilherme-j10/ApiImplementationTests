"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserOperationsUseCases = void 0;
const User_1 = require("../../entities/User");
class UserOperationsUseCases {
    constructor(useIinterfaceRespositorie) {
        this.useIinterfaceRespositorie = useIinterfaceRespositorie;
    }
    async CreateUser(data) {
        const userExists = await this.useIinterfaceRespositorie.findByEmail(data.email);
        if (userExists.length > 0) {
            throw new Error('this user alredy exists');
        }
        const user = new User_1.User({
            email_user: data.email,
            name_user: data.name,
            password_user: data.pass
        });
        return this.useIinterfaceRespositorie.findById((await this.useIinterfaceRespositorie.CreateUser(user))[0]);
    }
    async DeleteUser(id) {
        const result = await this.useIinterfaceRespositorie.DeleteUserById(id);
        if (result) {
            return true;
        }
        throw new Error('Probaly this register has alredy been deleted.');
    }
}
exports.UserOperationsUseCases = UserOperationsUseCases;
