// @packages
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

// @screens
import PageOneScree from '../screens/PageOneScree';
import PageTwoScree from '../screens/PageSecondScreen';
import PageThreeScree from '../screens/PageThirdScren';
import PeopleScreen from '../screens/PeopleScreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent',
        },
        cardStyle: {
          backgroundColor: 'white',
        },
      }}
    >
      <Stack.Screen name="PageOne" component={PageOneScree} options={{ title: 'Page One' }} />
      <Stack.Screen name="PageTwo" component={PageTwoScree} options={{ title: 'Page Two' }} />
      <Stack.Screen name="PageThree" component={PageThreeScree} options={{ title: 'Page Three' }} />
      <Stack.Screen name="PeopleScreen" component={PeopleScreen} options={{ title: 'People Screen' }} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
