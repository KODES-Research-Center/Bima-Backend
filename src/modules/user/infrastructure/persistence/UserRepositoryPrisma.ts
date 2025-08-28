import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { prisma } from "./../../../../lib/prisma"
import { Email } from "../../domain/value-objects/Email";
import { Password } from "../../domain/value-objects/Password";
import { Phone } from "../../domain/value-objects/Phone";

export class UserRepositoryPrisma implements IUserRepository {
  async findByEmail(email: string) {
    const rec = await prisma.user.findUnique({ where: { email } });
    if (!rec) return null;
    return new User(
      rec.id,
      rec.name,
      new Email(rec.email),
      new Password(rec.password),
      new Phone(rec.phone),
      rec.role,
      rec.country,
      rec.region ?? undefined,
      rec.language ?? undefined
    );
  }

  async findById(id: string) {
    const rec = await prisma.user.findUnique({ where: { id } });
    return rec ? await this.findByEmail(rec.email) : null;
  }

  async save(user: User) {
    await prisma.user.upsert({
      where: { id: user.id },
      create: {
        id: user.id,
        name: user.name,
        email: user.email.value,
        password: user["password"].value,
        phone: user["phone"].value,
        role: user.role,
      },
      update: {
        name: user.name,
        password: user["password"].value,
        phone: user["phone"].value,
      },
    });
  }
}
