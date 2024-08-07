import { Button } from '@/components';
import { fireEvent, render } from '@testing-library/react-native';

describe('Button', () => {
  it('renders correctly', () => {
    const { getByText } = render(<Button label='Click me' />);
    const buttonElement = getByText('Click me');
    expect(buttonElement).toBeTruthy();
  });

  it('calls onPress when clicked', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button label='Click me' onPress={onPressMock} />
    );
    const buttonElement = getByText('Click me');
    fireEvent.press(buttonElement);
    expect(onPressMock).toHaveBeenCalled();
  });

  it('renders with disabled styles when disabled prop is true', () => {
    const { getByTestId } = render(<Button label='Click me' disabled />);
    const touchableElement = getByTestId('button-touchable');

    const styles = touchableElement.props.style;

    expect(styles).toEqual(
      expect.objectContaining({ backgroundColor: '#A9A9A9' })
    );
  });

  it('renders with enabled styles when disabled prop is false', () => {
    const { getByTestId } = render(
      <Button label='Click me' disabled={false} />
    );
    const touchableElement = getByTestId('button-touchable');

    const styles = touchableElement.props.style;

    expect(styles).toEqual(
      expect.objectContaining({ backgroundColor: '#EC8B00' })
    );
  });
});
