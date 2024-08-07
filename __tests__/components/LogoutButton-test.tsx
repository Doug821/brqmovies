import { fireEvent, render } from '@testing-library/react-native';

import { LogoutButton } from '@/components';

describe('Button', () => {
  it('should render the LogoutButton component', () => {
    const { getByText, getByTestId } = render(<LogoutButton />);

    expect(getByText('Sair')).toBeTruthy();
    expect(getByTestId('logout-icon')).toBeTruthy();
  });

  it('should handle press events', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(<LogoutButton onPress={onPressMock} />);

    fireEvent.press(getByTestId('logout-button'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
