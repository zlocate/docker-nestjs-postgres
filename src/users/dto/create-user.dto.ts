import { PickType } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsUrl, Length } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends PickType(User, [
  'username',
  'email',
  'bio',
  'image',
] as const) {
  @IsEmail()
  public email: string;

  @IsString()
  @Length(1, 25)
  public username: string;

  @IsOptional()
  @IsString()
  @Length(0, 300)
  public bio?: string | null;

  @IsOptional()
  @IsUrl()
  public image?: string | null;
}
