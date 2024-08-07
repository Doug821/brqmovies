import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { styles } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  label: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <TouchableOpacity
      testID='button-touchable'
      {...props}
      style={[
        styles.button,
        {
          backgroundColor: props.disabled ? '#A9A9A9' : '#EC8B00',
        },
        props.style,
      ]}
    >
      <Text
        style={[
          styles.label,
          {
            color: props.disabled ? '#2E2F33' : '#fff',
          },
        ]}
      >
        {props.label}
      </Text>
    </TouchableOpacity>
  );
};
