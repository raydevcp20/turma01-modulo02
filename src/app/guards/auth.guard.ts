import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  console.log('authGuard', route, state);
  const router = inject(Router);
  // Aqui você pode implementar a lógica para verificar se o usuário está autenticado
  // Por exemplo, você pode verificar se há um token de autenticação no localStorage
  const isAuthenticated = !!localStorage.getItem('authToken'); // Exemplo simples de verificação
  if (!isAuthenticated) {
    // Redireciona para a página de login se não estiver autenticado
    router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }
  // Se o usuário estiver autenticado, permite o acesso à rota
  console.log('Usuário autenticado, acesso permitido.');
  return true;
};
