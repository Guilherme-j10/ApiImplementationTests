"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ControllerOperationsUser = void 0;
class ControllerOperationsUser {
    constructor(useCaseOperationsUser) {
        this.useCaseOperationsUser = useCaseOperationsUser;
    }
    async createUser(req, res) {
        const { email, name, pass } = req.body;
        try {
            const result = await this.useCaseOperationsUser.CreateUser({
                name: name,
                email: email,
                pass: pass
            });
            return res.json(result);
        }
        catch (error) {
            return res.json({
                error: true,
                message: error.message || 'Unxpected error'
            });
        }
    }
    async deleteUser(req, res) {
        try {
            return res.json((await this.useCaseOperationsUser.DeleteUser(Number(req.params.id))));
        }
        catch (error) {
            return res.json({
                error: true,
                message: error.message
            });
        }
    }
}
exports.ControllerOperationsUser = ControllerOperationsUser;
