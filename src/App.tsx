// import 'react-native-gesture-handler';

// import { NavigationContainer } from '@react-navigation/native';
// import React from 'react';
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
// import { PaperProvider } from 'react-native-paper';
// import { SafeAreaProvider } from 'react-native-safe-area-context';

// import AuthNavigator from './navigation/AuthNavigator';

// function App(): React.JSX.Element {
//   return (
//     <PaperProvider>
//       <SafeAreaProvider>
//         <GestureHandlerRootView style={{ flex: 1 }}>
//           <NavigationContainer>
//             <AuthNavigator />
//           </NavigationContainer>
//         </GestureHandlerRootView>
//       </SafeAreaProvider>
//     </PaperProvider>
//   );
// }

// export default App;

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import PostComponent from '../src/components/postComponent/postComponent'; // Adjust the path if needed

const Stack = createNativeStackNavigator();

const TestScreen = () => {
  return <PostComponent />;
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TestPostComponent" component={TestScreen} options={{ title: 'Test Post Component' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
