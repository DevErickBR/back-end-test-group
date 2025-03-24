import { NextFunction, Request } from "express";
import { RegisterUseCase } from "./register.use-case";
import { z } from "zod";

export class RegisterController {
  constructor(private readonly registerUseCase: RegisterUseCase) {}

  async handle(request: Request, response: Response, next: NextFunction) {
    const bodySchema = z.object({
      name: z.string().min(3),
      email: z.string().email(),
      password: z.string().min(6),
    });

    try {
      const { name, email, password } = bodySchema.parse(request.body);
      return response.status(201).json({ message: "User created" });
    } catch (error) {
      next(error);
    }
  }
}
