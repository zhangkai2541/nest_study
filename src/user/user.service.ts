import { Injectable } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";

@Injectable()
export class UserService {
  getUserInfo(): UserEntity {
    const user = new UserEntity();
    user.id = 1; 
    user.name = 'Mike';
    user.age = 30;
    user.address = 'Shanghai';
    user.sex = 'male';
    user.createdTime = new Date(); // 这里你需要根据实际情况赋值
    user.updatedTime = new Date(); // 这里你需要根据实际情况赋值
    return user;
  }
}