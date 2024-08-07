import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Logout } from '@/assets/icons/Logout';

import { styles } from './styles';

export const LogoutButton: React.FC<TouchableOpacityProps> = (props) => {
  return (
    <TouchableOpacity style={[styles.container, props.style]} {...props}>
      <Logout color='#fff' />
      <Text style={{ color: '#fff' }}>Sair</Text>
    </TouchableOpacity>
  );
};
