import { fireEvent, render } from '@testing-library/react-native';

import { HeaderMenu } from '@/components';

describe('HeaderMenu', () => {
  it('renders correctly', () => {
    const { getByTestId } = render(<HeaderMenu isMenuVisible={false} />);
    const headerMenu = getByTestId('header-menu');

    expect(headerMenu).toBeTruthy();
  });

  it('changes background color when menu is visible', () => {
    const { getByTestId } = render(<HeaderMenu isMenuVisible={true} />);
    const headerMenu = getByTestId('header-menu');

    const styles = headerMenu.props.style;

    expect(styles).toEqual(
      expect.objectContaining({ backgroundColor: '#EC8B00' })
    );
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByTestId } = render(
      <HeaderMenu isMenuVisible={false} onPress={onPressMock} />
    );
    const headerMenu = getByTestId('header-menu');
    fireEvent.press(headerMenu);

    expect(onPressMock).toHaveBeenCalled();
  });
});
