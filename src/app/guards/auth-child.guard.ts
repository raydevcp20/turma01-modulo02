import { CanActivateChildFn } from '@angular/router';

export const authChildGuard: CanActivateChildFn = (childRoute, state) => {
  console.log('authChildGuard', childRoute, state);
  // Aqui você pode implementar a lógica para verificar se o usuário está autenticado
  // Por exemplo, você pode verificar se há um token de autenticação no localStorage
  return true;
};
