import { fireEvent, render } from '@testing-library/react-native';
import { router } from 'expo-router';

import { useMovies } from '@/contexts/movies';
import { useSession } from '@/contexts/session';

import Home from '@/app/(app)/index';

jest.mock('@/contexts/movies', () => ({
  useMovies: jest.fn(),
}));

jest.mock('@/contexts/session', () => ({
  useSession: jest.fn(),
}));

jest.mock('expo-router', () => ({
  router: {
    push: jest.fn(),
  },
}));

describe('Home Page', () => {
  const mockMovies = [
    { id: 1, poster_path: '/path/to/poster1.jpg' },
    { id: 2, poster_path: '/path/to/poster2.jpg' },
  ];

  let signOutMock: jest.Mock;
  let setIsLogoutVisibleMock: jest.Mock;
  let setSelectedMovieMock: jest.Mock;
  let pushMock: jest.Mock;

  beforeEach(() => {
    signOutMock = jest.fn();
    setIsLogoutVisibleMock = jest.fn();
    setSelectedMovieMock = jest.fn();
    pushMock = jest.fn();

    (useMovies as jest.Mock).mockReturnValue({
      movies: mockMovies,
      setSelectedMovie: setSelectedMovieMock,
    });

    (useSession as jest.Mock).mockReturnValue({
      signOut: signOutMock,
      isLogoutVisible: true,
      setIsLogoutVisible: setIsLogoutVisibleMock,
    });

    (router.push as jest.Mock).mockImplementation(pushMock);
  });

  it('should render correctly with movies and logout button', () => {
    const { getByText, getAllByTestId } = render(<Home />);

    expect(getByText('Sair')).toBeTruthy();
    expect(getAllByTestId('movie-card')).toHaveLength(mockMovies.length);
  });

  it('should call handleSignOut when logout button is pressed', () => {
    const { getByText } = render(<Home />);

    fireEvent.press(getByText('Sair'));

    expect(setIsLogoutVisibleMock).toHaveBeenCalledWith(false);
    expect(signOutMock).toHaveBeenCalled();
  });

  it('should navigate to details page when a movie card is pressed', () => {
    const { getAllByTestId } = render(<Home />);

    fireEvent.press(getAllByTestId('movie-card')[0]);

    expect(setSelectedMovieMock).toHaveBeenCalledWith(mockMovies[0].id);
    expect(pushMock).toHaveBeenCalledWith('/details');
  });
});
