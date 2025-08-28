export class Phone {
  constructor(private readonly _value: string) {
    if (!/^\+\d{10,15}$/.test(_value)) {
      throw new Error("Invalid phone number");
    }
  }
  get value(): string { return this._value; }
}
