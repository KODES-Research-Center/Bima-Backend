import { Email } from "../value-objects/Email";
import { Password } from "../value-objects/Password";
import { Phone } from "../value-objects/Phone";
import { NationalId } from "../value-objects/NationalId";
import { UserRole } from "./../../../../lib/prisma"

export class User {
  constructor(
    public readonly id: string,
    public name: string,
    public email: Email,
    private password: Password,
    public phone: Phone,
    public role: UserRole,
    public country: string,
    public region?: string,
    public language?: string,
  ) {}

  verifyPassword(plain: string): boolean {
    return this.password.compare(plain);
  }

  changePassword(newPass: string) {
    this.password = Password.fromPlain(newPass);
  }
}
