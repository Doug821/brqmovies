import { fireEvent, render } from '@testing-library/react-native';

import SignIn from '@/app/signIn';
import { useSession } from '@/contexts/session';

jest.mock('@/contexts/session', () => ({
  useSession: jest.fn(),
}));

describe('SignIn Page', () => {
  let signInMock: jest.Mock;
  let setErrorMock: jest.Mock;

  beforeEach(() => {
    signInMock = jest.fn();
    setErrorMock = jest.fn();

    (useSession as jest.Mock).mockReturnValue({
      signIn: signInMock,
      error: null,
      setError: setErrorMock,
    });
  });

  it('should render correctly', () => {
    const { getByPlaceholderText, getByText } = render(<SignIn />);

    expect(getByPlaceholderText('Usuário')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByText('Entrar')).toBeTruthy();
    expect(getByText('Esqueci a Senha')).toBeTruthy();
  });

  it('should call signIn with correct credentials', () => {
    const { getByPlaceholderText, getByTestId } = render(<SignIn />);

    fireEvent.changeText(getByPlaceholderText('Usuário'), 'testuser');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'password123');
    fireEvent.press(getByTestId('signInButton'));

    expect(signInMock).toHaveBeenCalledWith({
      username: 'testuser',
      password: 'password123',
    });
  });

  it('should display error message when there is an error', () => {
    (useSession as jest.Mock).mockReturnValue({
      signIn: signInMock,
      error: 'Invalid credentials',
      setError: setErrorMock,
    });

    const { getByText } = render(<SignIn />);

    expect(getByText('Invalid credentials')).toBeTruthy();
  });
});
