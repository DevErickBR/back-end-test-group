import { UserRepository } from "../../repositories/user.repository";
import { LoginController } from "./login.controller";
import { LoginUseCase } from "./login.use-case";

const userRepository = new UserRepository(  );
const loginUseCase = new LoginUseCase(userRepository);
const loginController = new LoginController(loginUseCase);

export { loginController };
