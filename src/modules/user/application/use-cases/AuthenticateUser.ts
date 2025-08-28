import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class AuthenticateUser {
  constructor(private repo: IUserRepository) {}

  async execute(email: string, password: string) {
    const user = await this.repo.findByEmail(email);
    if (!user || !user.verifyPassword(password)) {
      throw new Error("Invalid credentials");
    }
    return user;
  }
}
