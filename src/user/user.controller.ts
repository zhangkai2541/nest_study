import { Controller, Get } from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./dto/user.dto";

@Controller('user')
export class UserController{
  constructor(private readonly userService: UserService){}

  @Get()
  getUserInfo(): UserDTO {
    return this.userService.getUserInfo();
  }
}