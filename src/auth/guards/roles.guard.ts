import { Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard {
  constructor(private reflector: Reflector) {}

  isadmin (){
    //const roles = this.reflector.get<string[]>('roles', context.getClass());
  }
  
}