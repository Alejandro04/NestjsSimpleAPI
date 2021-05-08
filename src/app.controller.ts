import { Controller, Get, Post, Request } from '@nestjs/common';
import { AuthService } from './auth/services/auth.service';
import { Roles } from './auth/decorators/roles.decorator';
import { Role } from './auth/enums/role.enums';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.body.user);
  }
    
  @Get('profile')
  @Roles(Role.Admin)
  getProfile(@Request() req) {
    return "ES ADMIN";
  }
}