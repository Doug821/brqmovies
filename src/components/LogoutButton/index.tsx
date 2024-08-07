import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Logout } from '@/assets/icons/Logout';

import { styles } from './styles';

export const LogoutButton: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <TouchableOpacity
      testID='logout-button'
      style={[styles.container, props.style]}
      {...props}
    >
      <Logout testID='logout-icon' color='#fff' />
      <Text style={{ color: '#fff' }}>Sair</Text>
    </TouchableOpacity>
  );
};
