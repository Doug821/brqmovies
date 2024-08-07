import { Redirect, router, Stack } from 'expo-router';
import { StatusBar, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useSession } from '@/contexts/session';

import { ArrowBack } from '@/assets/icons/ArrowBack';
import { Heart } from '@/assets/icons/Heart';
import { HeaderMenu } from '@/components/HeaderMenu';

export default function TabLayout() {
  const { isLoading, session, isLogoutVisible, setIsLogoutVisible } =
    useSession();

  const { bottom } = useSafeAreaInsets();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href='/signIn' />;
  }

  return (
    <View
      style={{ flex: 1, paddingBottom: bottom, backgroundColor: '#16171B' }}
    >
      <StatusBar backgroundColor='#16171B' barStyle={'light-content'} />
      <Stack>
        <Stack.Screen
          name='index'
          options={{
            title: 'BRQ Movies',
            headerStyle: {
              backgroundColor: '#16171B',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontSize: 22,
            },
            headerRight: () => (
              <HeaderMenu
                isMenuVisible={isLogoutVisible}
                onPress={() => setIsLogoutVisible(!isLogoutVisible)}
              />
            ),
          }}
        />
        <Stack.Screen
          name='details'
          options={{
            headerTitle: '',
            headerTransparent: true,
            headerLeft: () => (
              <TouchableOpacity onPress={router.back}>
                <ArrowBack color='#fff' backgroundColor='#16171B' />
              </TouchableOpacity>
            ),
            headerRight: () => (
              <TouchableOpacity onPress={() => {}}>
                <Heart color='#16171B' backgroundColor='#fff' />
              </TouchableOpacity>
            ),
          }}
        />
      </Stack>
    </View>
  );
}
