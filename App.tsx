import { NavigationContainer } from '@react-navigation/native';

import MainTab from '@/navigation/MainTab';

export default function App() {
  return (
    <NavigationContainer>
      <MainTab />
    </NavigationContainer>
  );
}