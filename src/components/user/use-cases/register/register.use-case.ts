import { UserRepository } from "../../repositories/user.repository";
import * as bcrypt from "bcryptjs";
import { BadRequest } from "../../../../errors/BadRequest";

export class RegisterUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async handle({ email, name, password }: any) {
    const user = await this.userRepository.findByEmail(email);
    if (user) throw new BadRequest("User already exists");

    const hashedPassword = bcrypt.hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: hashedPassword,
    });

    return { message: "User created successfully" };
  }
}
