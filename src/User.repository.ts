import { injectable } from 'inversify'
import Database, { IUser, UserRequestDto } from './Database'

// NOTE: Make db public instead of private. This is required for the tests.
@injectable()
export class UserRepository {
  public readonly db = Database


  async createUser (userData: UserRequestDto) {
    if(!userData){
      throw new Error('userData cannot be null')
    }
    return this.db.create(userData)
     

  }
  async getUsers(){
    return this.db.all()
  }
}
