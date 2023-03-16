// @packages
import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { useWindowDimensions, Image, View, Text, TouchableOpacity } from 'react-native';

// @screens
import SettingsScreen from '../screens/SettingsScreen';

// @styles
import styles from '../theme/appTheme';
import { Tabs } from './BottomTabsNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const { width } = useWindowDimensions();

  return (
    <Drawer.Navigator
      drawerType={width >= 768 ? 'permanent' : 'front'}
      drawerContent={(props) => <DrawerContent {...props} />}
    >
      <Drawer.Screen name="Stack Navigator" component={Tabs} options={{ title: 'Home' }} />
      <Drawer.Screen name="Settings Screen" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Drawer.Navigator>
  );
};

export const DrawerContent = ({
  navigation,
}: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.avatarContainer}>
        <Image
          source={{ uri: 'https://www.pngkey.com/png/full/114-1149878_setting.png' }}
          style={styles.avatar}
        />
      </View>

      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Stack Navigator')}
        >
          <Text style={styles.menuItem}>Home</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.menuButton}
          onPress={() => navigation.navigate('Settings Screen')}
        >
          <Text style={styles.menuItem}>Settings</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
};

export default DrawerNavigator;
