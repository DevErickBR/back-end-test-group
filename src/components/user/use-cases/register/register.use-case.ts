import { NextFunction, Request } from "express";
import { UserRepository } from "../../repositories/user.repository";
export class RegisterUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
    } catch (error) {
      next(error);
    }
  }
}
