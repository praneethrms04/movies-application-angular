import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const router = new Router();

  const accessToken = localStorage.getItem('token');
  if (accessToken) {
    return true;
  } else {
    router.navigate(['auth', 'login']);
    return false;
  }
};
