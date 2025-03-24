import { NextFunction, Request, Response } from "express";
import { LoginUseCase } from "./login.use-case";

export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    try {
      const { email, password } = request.body;
      return response.status(200).json({ message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }
}
