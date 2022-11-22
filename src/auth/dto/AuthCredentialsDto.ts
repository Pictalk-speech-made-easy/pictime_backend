import { usernameRegexp } from './../../utilities/creation';
import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(3)
  @MaxLength(254)
  @Matches(
    usernameRegexp,
    { message: 'Not a valid email address' },
  )
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(20)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/ ,{
    message: 'password too weak',
  })
  password: string;
}
