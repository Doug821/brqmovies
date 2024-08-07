import { SessionProvider } from './session';

interface AppProviderProps {
  children: React.ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <SessionProvider>{children}</SessionProvider>;
};
