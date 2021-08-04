"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(props) {
        this.name_user = props.name_user;
        this.email_user = props.email_user;
        this.password_user = `${props.password_user}cripted`;
    }
}
exports.User = User;
