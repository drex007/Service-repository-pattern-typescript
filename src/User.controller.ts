import { controller, httpGet } from 'inversify-express-utils'
import { UserRequestDto } from './Database'
import { UserService } from './User.service'

// NOTE: Make userService public and not private. This is required for the tests!
@controller('/users')
export class UserController {
  constructor(public readonly userService: UserService){

  }

  async store(requestData:UserRequestDto){
    return this.userService.createUser(requestData)

  }
  @httpGet('/')
  async index(){
    const users = await this.userService.getUsers()
    return `current users count ${users.length}`
  }
}
 