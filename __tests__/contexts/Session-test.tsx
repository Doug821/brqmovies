import { act, fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';
import { Button, Text } from 'react-native';

import { SessionProvider, useSession } from '@/contexts/session';
import { useStorageState } from '@/hooks/useStorageState';

jest.mock('expo-router', () => ({
  router: {
    replace: jest.fn(),
  },
}));

jest.mock('@/hooks/useStorageState', () => ({
  useStorageState: jest.fn(),
}));

const MockComponent = () => {
  const {
    signIn,
    signOut,
    session,
    error,
    setError,
    isLoading,
    isLogoutVisible,
    setIsLogoutVisible,
  } = useSession();

  return (
    <>
      <Text testID='session'>{session}</Text>
      <Text testID='error'>{error}</Text>
      <Text testID='isLoading'>{isLoading.toString()}</Text>
      <Text testID='isLogoutVisible'>{isLogoutVisible.toString()}</Text>
      <Button
        title='Sign In'
        testID='signIn'
        onPress={() => signIn({ username: 'user', password: '123' })}
      />
      <Button title='signOut' testID='signOut' onPress={signOut} />
      <Button
        title='setError'
        testID='setError'
        onPress={() => setError('error')}
      />
      <Button
        title='setIsLogoutVisible'
        testID='setIsLogoutVisible'
        onPress={() => setIsLogoutVisible(true)}
      />
    </>
  );
};

describe('SessionProvider', () => {
  beforeEach(() => {
    (useStorageState as jest.Mock).mockReturnValue([[false, null], jest.fn()]);
  });

  it('should handle signIn with valid credentials', async () => {
    const setSessionMock = jest.fn();
    (useStorageState as jest.Mock).mockReturnValue([
      [false, null],
      setSessionMock,
    ]);

    const { getByTestId } = render(
      <SessionProvider>
        <MockComponent />
      </SessionProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('signIn'));
    });

    expect(setSessionMock).toHaveBeenCalledWith('session');
    expect(router.replace).toHaveBeenCalledWith('/');
  });

  it('should handle signOut', async () => {
    const setSessionMock = jest.fn();
    (useStorageState as jest.Mock).mockReturnValue([
      [false, 'session'],
      setSessionMock,
    ]);

    const { getByTestId } = render(
      <SessionProvider>
        <MockComponent />
      </SessionProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('signOut'));
    });

    expect(setSessionMock).toHaveBeenCalledWith(null);
  });

  it('should set error state', async () => {
    const { getByTestId } = render(
      <SessionProvider>
        <MockComponent />
      </SessionProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('setError'));
    });

    expect(getByTestId('error').children[0]).toBe('error');
  });

  it('should set isLogoutVisible state', async () => {
    const { getByTestId } = render(
      <SessionProvider>
        <MockComponent />
      </SessionProvider>
    );

    await act(async () => {
      fireEvent.press(getByTestId('setIsLogoutVisible'));
    });

    expect(getByTestId('isLogoutVisible').children[0]).toBe('true');
  });
});
