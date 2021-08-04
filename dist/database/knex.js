"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conn = void 0;
const knex_1 = __importDefault(require("knex"));
const Conn = knex_1.default({
    client: 'mysql2',
    connection: {
        database: 'tsbank',
        user: 'root',
        password: '',
        host: 'localhost'
    },
    pool: { min: 0, max: 2 }
});
exports.Conn = Conn;
