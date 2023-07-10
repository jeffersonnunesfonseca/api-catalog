import { Gender } from '@src/common/enums/gender.enum';
import { PersonType } from '@src/common/enums/person-type.enum';
import { Role } from '@src/common/enums/role.enum';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn({
    unsigned: true,
  })
  id?: number;

  @Column({
    length: 150,
  })
  name: string;

  @Column({
    enum: Gender,
  })
  gender: string;

  @Column({
    length: 150,
    unique: true,
  })
  email_login: string;

  @Column({
    length: 150,
  })
  password: string;

  @Column({
    type: 'date',
    nullable: true,
  })
  birthday_at: Date;

  @Column({
    default: PersonType,
  })
  person_type: string;

  @Column({
    length: 150,
  })
  company_name: string;

  @Column({
    length: 150,
  })
  fantasy_name: string;

  @Column({
    enum: Role,
    default: Role.USER,
  })
  role: string;

  @CreateDateColumn()
  created_at?: Date;

  @UpdateDateColumn()
  updated_at?: Date;
}
