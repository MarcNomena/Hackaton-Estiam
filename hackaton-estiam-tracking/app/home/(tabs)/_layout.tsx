import { Tabs } from 'expo-router';
import { Icon } from '@rneui/themed';
export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: 'Accueil',headerShown:false, tabBarIcon: ({ color, size }) => (
            <Icon name="home" type="material" color={color} size={size} />
          ), }} />
        <Tabs.Screen name="result" options={{ title: 'Step Tracker', headerShown:false, tabBarIcon: ({ color, size }) => (
            <Icon name="directions-walk" type="material" color={color} size={size} />
          ), }} />
      <Tabs.Screen name="calendar" options={{ title: 'Calendar',headerShown: false, tabBarIcon: ({ color, size }) => (
            <Icon name="calendar-today" type="material" color={color} size={size} />
          ), }} />
    </Tabs>
  );
}