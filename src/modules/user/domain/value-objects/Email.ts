export class Email {
  constructor(private readonly _value: string) {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(_value)) {
      throw new Error("Invalid email format");
    }
  }
  get value(): string { return this.value; }
}
