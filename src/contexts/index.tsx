import { MoviesProvider } from './movies';
import { SessionProvider } from './session';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <SessionProvider>
      <MoviesProvider>{children}</MoviesProvider>
    </SessionProvider>
  );
};
