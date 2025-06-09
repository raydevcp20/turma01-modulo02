import { CanMatchFn } from '@angular/router';

export const authMatchGuard: CanMatchFn = (route, segments) => {
  console.log('authMatchGuard', route, segments);
  return true;
};
