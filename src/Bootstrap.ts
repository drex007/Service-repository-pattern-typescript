import 'dotenv/config'
import 'reflect-metadata'

import { UserRepository } from './User.repository'
import { UserService } from './User.service'
import { UserController } from './User.controller'
import { Container } from 'inversify'
import { InversifyExpressServer } from 'inversify-express-utils'
import './User.controller'

/* --- Do this as last! --- */

// NOTE: Make sure to do a named export of your userController

export async function Bootstrap(){
  const container = new Container()
  container.bind(UserRepository).toSelf()
  container.bind(UserService).toSelf()
  const server = new InversifyExpressServer(container)
  const app = server.build()
  app.listen(5000, ()=>console.log('server connected and running on 5000')
  )

}

Bootstrap()
