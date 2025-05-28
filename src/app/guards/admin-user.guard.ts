import { CanActivateFn } from '@angular/router';

export const adminUserGuard: CanActivateFn = (route, state) => {
  console.log('adminUserGuard', route, state);
  // Aqui você pode implementar a lógica para verificar se o usuário é um administrador
  return true;
};
