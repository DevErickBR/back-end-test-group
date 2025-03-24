import { NextFunction, Request, Response } from "express";
import { LoginUseCase } from "./login.use-case";
import { z } from "zod";

export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {

    const bodySchema = z.object({
      email: z.string().email(),
      password: z.string().min(6),
    });

    try {
      const { email, password } = bodySchema.parse(request.body);

      

      return response.status(200).json({ message: "Login successful" });
    } catch (error) {
      next(error);
    }
  }
}
