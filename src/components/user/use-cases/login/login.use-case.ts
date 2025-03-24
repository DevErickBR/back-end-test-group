import { NextFunction, Request } from "express";

export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
    } catch (error) {
      next(error);
    }
  }
}
