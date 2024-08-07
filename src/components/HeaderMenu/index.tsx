import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { Menu } from '@/assets/icons/Menu';
import { styles } from './styles';

interface HeaderMenuProps extends TouchableOpacityProps {
  isMenuVisible: boolean;
}

export const HeaderMenu: React.FC<HeaderMenuProps> = (props) => {
  return (
    <TouchableOpacity
      testID='header-menu'
      {...props}
      style={[
        styles.container,
        { backgroundColor: props.isMenuVisible ? '#EC8B00' : '#16171B' },
        props.style,
      ]}
    >
      <Menu
        testID='menu-icon'
        color={props.isMenuVisible ? '#16171B' : '#A9A9A9'}
      />
    </TouchableOpacity>
  );
};
