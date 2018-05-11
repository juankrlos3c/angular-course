import { Injectable } from '@angular/core';
@Injectable()
export class GuardService {
  // ...
  canActivate(): boolean {
    return false;
  }
}
