import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  age: number;

  @Column()
  address: string;

  @Column()
  sex: string;

  @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(3)" })
  public createdTime: Date;

  @UpdateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(3)", onUpdate: "CURRENT_TIMESTAMP(3)" })
  public updatedTime: Date;

  // toDatabaseFormat() {
  //   this.createdTime = new Date(this.createdTime.getTime()); // 将毫秒时间戳转换回 Date 对象
  //   this.updatedTime = new Date(this.updatedTime.getTime()); // 将毫秒时间戳转换回 Date 对象
  // }
}