import { NextFunction, Request } from "express";
import { RegisterUseCase } from "./register.use-case";

export class RegisterController {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
    } catch (error) {
      next(error);
    }
  }
}
