export class User {
  private _name: string;
  private _email: string;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  set name(value: string) {
    this._name = value;
  }

  set email(value: string) {
    this._email = value;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }
}
