import { CanDeactivateFn } from '@angular/router';

export const authDeactivateGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
  console.log('authDeactivateGuard', component, currentRoute, currentState, nextState);
  // Aqui você pode implementar a lógica para verificar se o usuário pode sair da rota
  // Por exemplo, você pode verificar se há alterações não salvas no formulário
  return true;
};
