import { router } from 'expo-router';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { styles } from './styles';

export default function SignIn() {
  const handleSignIn = () => {
    router.replace('/');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/icon.png')} />
      <View style={styles.inputWrapper}>
        <TextInput
          placeholder='Usuário'
          style={styles.input}
          placeholderTextColor='#fff'
        />

        <TextInput
          placeholder='Senha'
          secureTextEntry
          keyboardType='numeric'
          style={styles.input}
          placeholderTextColor='#fff'
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
