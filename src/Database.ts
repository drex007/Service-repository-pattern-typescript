import { IUser, IDatabaseState } from "./interfaces"
class Database {
  private state: IDatabaseState = {
    users: [],
  }

  /**
   *   @description Creates a new User with the given data
   */
  async create(user: Omit<IUser, 'id'>) {
    if (!user) {
      throw new Error('Missing userdata')
    }

    const createdUser = {
      id: this.state.users.length + 1,
      ...user,
    }

    this.state.users.push(createdUser)

    return createdUser
  }

  /**
   *
   * @description returns all the current users
   *
   */
  async all() {
    return this.state.users
  }

  public clear() {
    this.state.users = []
  }
}

export default new Database()
