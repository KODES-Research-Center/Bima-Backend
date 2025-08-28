import { v4 as uuid } from "uuid";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "modules/user/domain/entities/User";
import { Email } from "modules/user/domain/value-objects/Email"; 
import { Password } from "modules/user/domain/value-objects/Password"; 
import { Phone } from "modules/user/domain/entities/Phone"; 
import { NationalId } from "modules/user/domain/value-objects/NationalId";
import { UserRole } from "@prisma/client";

export class RegisterUser {
  constructor(private repo: IUserRepository) {}

  async execute(dto: {
    name: string;
    email: string;
    password: string;
    phone: string;
    nationalId?: string;
  }) {
    if (await this.repo.findByEmail(dto.email)) {
      throw new Error("Email already in use");
    }

    const user = new User(
      uuid(),
      dto.name,
      new Email(dto.email),
      Password.fromPlain(dto.password),
      new Phone(dto.phone),
      UserRole.CUSTOMER,
      "Kenya",
      undefined,
      undefined
    );

    await this.repo.save(user);
    return user;
  }
}
