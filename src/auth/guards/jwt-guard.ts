import { Injectable } from "@nestjs/common";
import { AuthGuard } from '@nestjs/passport'; 

@Injectable()
// before: export class JwtAuthGuard extends AuthGuard('jwt') {}
export class JwtAuthGuard extends AuthGuard.apply('jwt') {}