import { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

import { useSession } from '@/contexts/session';

import { Lock } from '@/assets/icons/Lock';
import { User } from '@/assets/icons/User';
import { Button, Input } from '@/components';

import { styles } from './styles';

export default function SignIn() {
  const { signIn, error, setError } = useSession();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [isSigninButtonDisabled, setIsSigninButtonDisabled] = useState(true);

  const handleSignIn = () => {
    signIn(credentials);
  };

  const handleChange = (value: string, key: 'username' | 'password') => {
    if (error) {
      setError(null);
    }

    setCredentials({ ...credentials, [key]: value });
  };

  useEffect(() => {
    if (credentials.username && credentials.password) {
      setIsSigninButtonDisabled(false);
    } else {
      setIsSigninButtonDisabled(true);
    }
  }, [credentials]);

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
          icon={() => <User color='#fff' />}
        />
        <Input
          placeholder='Senha'
          secureTextEntry
          keyboardType='numeric'
          placeholderTextColor='#fff'
          onChangeText={(text) => handleChange(text, 'password')}
          value={credentials.password}
          errorMessage='Digite sua senha'
          icon={() => <Lock color='#fff' />}
        />
        <View style={styles.buttonWrapper}>
          <Button
            onPress={handleSignIn}
            label='Entrar'
            disabled={isSigninButtonDisabled}
          />
          {error && <Text style={{ color: '#FF0000' }}>{error}</Text>}
          <Button
            style={{ backgroundColor: 'transparent' }}
            label='Esqueci a Senha'
          />
        </View>
      </View>
    </View>
  );
}
