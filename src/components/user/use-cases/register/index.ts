import { UserRepository } from "../../repositories/user.repository";
import { RegisterController } from "./register.controller";
import { RegisterUseCase } from "./register.use-case";

const userRepository = new UserRepository();
const registerUseCase = new RegisterUseCase(userRepository);
const registerController = new RegisterController(registerUseCase);

export { registerController };
  