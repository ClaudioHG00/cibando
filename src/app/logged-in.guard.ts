import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';

export const loggedInGuard: CanActivateFn = (route, state) => {
  return true;
};
