"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = require("express");
const OperationsUser_1 = require("../useCases/OperationsUser");
const UserRouter = express_1.Router();
exports.UserRouter = UserRouter;
UserRouter.post('/CreateUser', (req, res) => {
    return OperationsUser_1.controllerOperations.createUser(req, res);
});
UserRouter.delete('/DeleteUser/:id', (req, res) => {
    return OperationsUser_1.controllerOperations.deleteUser(req, res);
});
