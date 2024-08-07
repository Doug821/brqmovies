import { createContext, useContext, type PropsWithChildren } from 'react';

import { useStorageState } from '@/hooks/useStorageState';

interface SessionContextData {
  signIn: () => void;
  signOut: () => void;
  session?: string | null;
  isLoading: boolean;
}

const SessionContext = createContext<SessionContextData | null>({
  signIn: () => null,
  signOut: () => null,
  session: null,
  isLoading: false,
});

export function SessionProvider({ children }: PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState('session');

  const signIn = () => {
    setSession('xxx');
  };

  const signOut = () => {
    setSession(null);
  };

  const value = {
    signIn,
    signOut,
    session,
    isLoading,
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
