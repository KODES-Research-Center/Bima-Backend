import bcrypt from "bcrypt";

export class Password {
  private constructor(private hash: string) {}

  static fromPlain(plain: string): Password {
    if (plain.length < 8) throw new Error("Password too short");
    const salt = bcrypt.genSaltSync();
    return new Password(bcrypt.hashSync(plain, salt));
  }

  compare(plain: string): boolean {
    return bcrypt.compareSync(plain, this.hash);
  }

  get value(): string { return this.hash; }
}
