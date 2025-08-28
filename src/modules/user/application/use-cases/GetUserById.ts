import { IUserRepository } from "../../domain/repositories/IUserRepository";

export class GetUserById {
  constructor(private repo: IUserRepository) {}

  execute(id: string) {
    return this.repo.findById(id);
  }
}
