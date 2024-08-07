import { fireEvent, render } from '@testing-library/react-native';
import { Text, View } from 'react-native';

import { IconProps } from '@/@types/icon';

import { Input } from '@/components';

const MockIcon = ({}: IconProps) => (
  <View testID='mock-icon'>
    <Text>Mock Icon</Text>
  </View>
);

describe('Input', () => {
  it('should render without errors', () => {
    const { getByTestId } = render(<Input />);
    const inputComponent = getByTestId('input-component');
    expect(inputComponent).toBeDefined();
  });

  it('should call onChangeText when input value changes', () => {
    const onChangeTextMock = jest.fn();
    const { getByTestId } = render(<Input onChangeText={onChangeTextMock} />);
    const inputComponent = getByTestId('input-component');
    fireEvent.changeText(inputComponent, 'New value');
    expect(onChangeTextMock).toHaveBeenCalledWith('New value');
  });

  it('should render the icon when provided', () => {
    const { getByTestId } = render(<Input icon={MockIcon} />);

    expect(getByTestId('mock-icon')).toBeTruthy();
  });
});
