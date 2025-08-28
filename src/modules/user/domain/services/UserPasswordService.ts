export class UserPasswordService {
  hash(password: string): string {
    // use bcryptjs to hash the password
    const bcrypt = require('bcryptjs');
    const salt = bcrypt.genSaltSync(10);
    return bcrypt.hashSync(password, salt);
  }
}
