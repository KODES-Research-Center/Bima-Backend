export class NationalId {
  constructor(private readonly _value?: string) {
    if (_value && !/^[A-Z0-9]{6,20}$/.test(_value)) {
      throw new Error("Invalid national ID");
    }
  }
  get value(): string | undefined { return this._value; }
}
