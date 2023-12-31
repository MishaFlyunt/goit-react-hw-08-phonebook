import { useAuth } from 'hooks';
import { Navigate } from 'react-router-dom';

/**
 * - Якщо маршрут обмежений і користувач увійшов у систему, відтворіть <Navigate> для перенаправленняTo
  * - В іншому випадку візуалізувати компонент
 */

export const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
