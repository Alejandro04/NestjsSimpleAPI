import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from '../../auth/services/auth.service';
import { JwtAuthGuard } from '../../auth/guards/jwt-guard';
import { LocalAuthGuard } from '../../auth/guards/local-guard';

@Controller()
export class UserController {
  
}