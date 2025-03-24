import { BadRequest } from "../../../../errors/BadRequest";
import { UserRepository } from "../../repositories/user.repository";
import * as bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { env } from "../../../../env";

export class LoginUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle(data: any) {
    const { email, password } = data;
    const user = await this.userRepository.findByEmail(email);
    if (!user) throw new BadRequest("Invalid credentials");

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) throw new BadRequest("Invalid credentials");

    const token = jwt.sign({ id: user.id }, env.JWT_SECRET, {
      expiresIn: "1h",
    });

    return { token };
  }
}
