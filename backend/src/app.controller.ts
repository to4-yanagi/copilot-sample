import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';


type TUser = {
  id: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): TUser[] {
    return this.appService.getUsers();
  }
}
