import { router } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { useSession } from '@/contexts/session';

import { styles } from './styles';

export default function SignIn() {
  const { signIn, error, setError } = useSession();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSignIn = () => {
    signIn(credentials);
  };

  const handleChange = (value: string, key: 'username' | 'password') => {
    if (error) {
      setError(null);
    }

    setCredentials({ ...credentials, [key]: value });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} />
      <View style={styles.inputWrapper}>
        <Input
          placeholder='Usuário'
          placeholderTextColor='#fff'
          onChangeText={(text) => handleChange(text, 'username')}
          value={credentials.username}
          errorMessage='Digite seu usuário'
          icon={require('@/assets/icons/profile-icon.png')}
        />
        <Input
          placeholder='Senha'
          secureTextEntry
          keyboardType='numeric'
          placeholderTextColor='#fff'
          onChangeText={(text) => handleChange(text, 'password')}
          value={credentials.password}
          errorMessage='Digite sua senha'
          icon={require('@/assets/icons/padlock-icon.png')}
        />
        <View style={styles.buttonWrapper}>
          <TouchableOpacity style={styles.button} onPress={handleSignIn}>
            <Text style={styles.label}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: 'transparent' }]}
          >
            <Text style={[styles.label, { color: '#fff' }]}>
              Esqueci a Senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
