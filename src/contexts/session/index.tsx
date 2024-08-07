import { router } from 'expo-router';
import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from 'react';

import { useStorageState } from '@/hooks/useStorageState';

interface SessionContextData {
  signIn: (credentials: { username: string; password: string }) => void;
  signOut: () => void;
  session?: string | null;
  error?: string | null;
  setError: (error: string | null) => void;
  isLoading: boolean;
  isLogoutVisible: boolean;
  setIsLogoutVisible: (isVisible: boolean) => void;
}

const SessionContext = createContext<SessionContextData | null>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  error: null,
  setError: () => null,
  isLoading: false,
  isLogoutVisible: false,
  setIsLogoutVisible: () => null,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [error, setError] = useState<string | null>(null);
  const [isLogoutVisible, setIsLogoutVisible] = useState<boolean>(false);
  const [[isLoading, session], setSession] = useStorageState('session');

  const signIn = (credentials: { username: string; password: string }) => {
    // It only simulates a login and sets a session if the username and password are user/123 respectively, otherwise it sets an error message
    if (credentials.username === 'user' && credentials.password === '123') {
      setSession('session');
      router.replace('/');
    } else {
      setError('Usuário ou senha inválidos');
    }
  };

  const signOut = () => {
    setSession(null);
  };

  const value = {
    signIn,
    signOut,
    session,
    isLoading,
    error,
    setError,
    isLogoutVisible,
    setIsLogoutVisible,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
}

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error('useSession must be wrapped in a <SessionProvider />');
  }

  return context;
}
