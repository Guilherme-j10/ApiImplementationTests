"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseOperationsUser = void 0;
const knex_1 = require("../../database/knex");
class DatabaseOperationsUser {
    async findByEmail(email) {
        return await knex_1.Conn.select().from('users').where({ email_user: email });
    }
    async findById(Id) {
        return await knex_1.Conn.select().from('users').where({ id_user: Id });
    }
    async CreateUser(data) {
        return await knex_1.Conn('users').insert({
            name_user: data.name_user,
            email_user: data.email_user,
            password_user: data.password_user
        });
    }
    async DeleteUser(email) {
        const response = await knex_1.Conn('users').where({ email_user: email }).delete();
        if (response) {
            return true;
        }
        return false;
    }
    async DeleteUserById(id) {
        const response = await knex_1.Conn('users').where({ id_user: id }).delete();
        if (response) {
            return true;
        }
        return false;
    }
}
exports.DatabaseOperationsUser = DatabaseOperationsUser;
