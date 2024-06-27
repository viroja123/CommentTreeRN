import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommentBox from './src/components/screens/commentBox';
import commentScreen from './src/components/screens/commentScreen';

const App = () => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator>
        <stack.Screen name="commentScreen" component={commentScreen} />
        <stack.Screen name="commentBox" component={CommentBox} />
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
