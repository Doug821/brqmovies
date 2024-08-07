import { Redirect, Tabs } from 'expo-router';
import { Text } from 'react-native';

import { useSession } from '@/contexts/session';

export default function TabLayout() {
  const { isLoading, session } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return <Redirect href='/signIn' />;
  }

  return (
    <Tabs>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Tab One',
        }}
      />
    </Tabs>
  );
}
