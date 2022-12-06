import { Body, Controller, Post, Req, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { AuthCredentialsDto } from './dto/AuthCredentialsDto';
import { GetUser } from './get-user.decorator';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  
  @Post('/signup')
  signUp(@Body() authCredentialsDto: AuthCredentialsDto): Promise<void> {
    return this.authService.signUp(authCredentialsDto);
  }

  @Post('/signin')
  signIn(@Body() authCredentialsDto: AuthCredentialsDto): Promise<{accessToken: String}> {
    return this.authService.signIn(authCredentialsDto);
  }
  
  @Get('/user/details')
    @UseGuards(AuthGuard())
    getUserDetails(@GetUser() user: User): Promise<User> {
      return this.authService.getUserDetails(user);
    }
}
