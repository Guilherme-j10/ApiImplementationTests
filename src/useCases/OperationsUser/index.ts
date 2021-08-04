import { DatabaseOperationsUser } from "../../repositories/implementations/DatabaseOperationsUser";
import { ControllerOperationsUser } from "./ControllerOperationsUser";
import { UserOperationsUseCases } from "./UserOperationsUseCases";

const databaseOperationsUser = new DatabaseOperationsUser();
const operationsUserCase = new UserOperationsUseCases(
  databaseOperationsUser
);
const controllerOperations = new ControllerOperationsUser(
  operationsUserCase
);

export { controllerOperations };