import { Redirect, Stack } from 'expo-router';
import React from 'react';
import { SafeAreaView, StatusBar, Text } from 'react-native';

import { useSession } from '@/contexts/session';

import { HeaderMenu } from '@/components/HeaderMenu';

export default function TabLayout() {
  const { isLoading, session, isLogoutVisible, setIsLogoutVisible } =
    useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href='/signIn' />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar backgroundColor='#16171B' />
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
          options={{ headerTitle: '', headerTransparent: true }}
        />
      </Stack>
    </SafeAreaView>
  );
}
