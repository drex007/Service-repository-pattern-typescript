import { injectable } from 'inversify'
import { UserRequestDto } from './Database'
import { UserRepository } from './User.repository'

// NOTE: Make userRepo public and not private. This is required for the tests!
@injectable()
export class UserService {
  constructor (public userRepo: UserRepository){}

  async createUser(userData: UserRequestDto){
    return this.userRepo.createUser(userData)

  }
  async getUsers(){
    return this.userRepo.getUsers()
  }
}
