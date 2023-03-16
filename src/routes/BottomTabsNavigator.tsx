// @packages
import React from 'react';
import { Platform } from 'react-native';
import { Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// @screens
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import TopTabsNavigator from './TopTapsNavigator';

// @styles
import { colors } from '../theme/appTheme';

export const Tabs = () => {
  return Platform.OS === 'ios' ? <TabsIos /> : <TabsAndroid />;
};

const BottomTabIos = createBottomTabNavigator();

export const TabsIos = () => {
  return (
    <BottomTabIos.Navigator
      sceneContainerStyle={{
        backgroundColor: 'white',
        borderTopWidth: 0,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'Stack Navigator':
              iconName = 'SN';
              break;
          }

          return <Text style={{color}}>{iconName}</Text>;
        },
      })}
    >
      <BottomTabIos.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <BottomTabIos.Screen
        name="Tab2"
        component={Tab2Screen}
        options={{
          title: 'Tab 2',
        }}
      />
    </BottomTabIos.Navigator>
  );
};

const BottomTabAndroid = createMaterialBottomTabNavigator();

export const TabsAndroid = () => {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colors.primary,
      }}
      screenOptions={({route}) => ({
        tabBarActiveTintColor: colors.primary,
        tabBarStyle: {
          borderTopColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarLabelStyle: {
          fontSize: 15,
        },
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1':
              iconName = 'T1';
              break;
            case 'Tab2':
              iconName = 'T2';
              break;
            case 'Stack Navigator':
              iconName = 'SN';
              break;
          }

          return (
            <Text
              style={{
                color,
              }}
            >
              {iconName}
            </Text>
          );
        },
      })}
    >
      <BottomTabAndroid.Screen
        name="Tab1"
        component={Tab1Screen}
        options={{
          title: 'Tab 1',
        }}
      />
      <BottomTabAndroid.Screen
        name="Tab2"
        component={TopTabsNavigator}
        options={{
          title: 'Tab 2',
        }}
      />
    </BottomTabAndroid.Navigator>
  );
};
