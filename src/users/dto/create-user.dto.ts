import {
  IsDateString,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  IsStrongPassword,
} from 'class-validator';
import { Role } from '@enums/role.enum';
import { Gender } from '@src/common/enums/gender.enum';
import { PersonType } from '@src/common/enums/person-type.enum';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEnum(Gender)
  gender: string;

  @IsEmail()
  email_login: string;

  @IsOptional()
  @IsDateString()
  birthday_date: Date;

  @IsEnum(PersonType)
  person_type: string;

  @IsString()
  company_name: string;

  @IsString()
  fantasy_name: string;

  @IsStrongPassword({
    minLength: 6,
    minUppercase: 1,
    minLowercase: 0,
    minNumbers: 0,
    minSymbols: 0,
  })
  password: string;
}
