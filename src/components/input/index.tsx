import { useState } from 'react';
import { Text, TextInput, TextInputProps, View } from 'react-native';

import { IconProps } from '@/@types/icon';

import { styles } from './styles';

interface InputProps extends TextInputProps {
  color?: string;
  errorMessage?: string;
  icon?: React.FC<IconProps>;
}

export const Input: React.FC<InputProps> = (props) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isErrored, setIsErrored] = useState(false);

  const handleInputFocus = () => {
    props.onFocus && props?.onFocus;
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    props.onBlur && props?.onBlur;
    setIsFocused(false);

    if (!props.value) {
      setIsErrored(true);
    } else {
      setIsErrored(false);
    }
  };

  return (
    <View>
      <View
        style={[
          styles.container,
          {
            borderBottomColor: isErrored
              ? '#FF0000'
              : isFocused
              ? '#EC8B00'
              : '#fff',
          },
        ]}
      >
        {props.icon && <props.icon color={props.color} />}
        <TextInput
          {...props}
          style={[styles.input, props.style]}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          onChangeText={(text) => {
            props.onChangeText && props.onChangeText(text);
            setIsErrored(false);
          }}
        />
      </View>
      {isErrored && (
        <Text style={styles.errorLabel}>
          {props.errorMessage || 'Campo obrigatório'}
        </Text>
      )}
    </View>
  );
};
