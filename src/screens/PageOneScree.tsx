// @packages
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useEffect } from 'react';
import { Button, View, Text, TouchableOpacity } from 'react-native';

// @styles
import styles from '../theme/appTheme';

interface PageOneScreeProps {
  navigation: DrawerScreenProps<any, any>['navigation'];
}

const PageOneScree = ({
  navigation,
}: PageOneScreeProps) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menu"
          onPress={() => navigation.toggleDrawer()}
        />
      ),
    });
  }, []);


  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        Page One Screen
      </Text>

      <Button title="Go to Page Two" onPress={() => navigation.navigate('PageTwo')} />
      <Button title="Go to People Page" onPress={() => navigation.navigate('PeopleScreen')} />

      <Text style={{ marginVertical: 20, fontSize: 20 }}>
        Navigation with arguments
      </Text>

      <View
        style={{ flexDirection: 'row' }}
      >
        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PeopleScreen', { id: 1, name: 'Diego' })}
        >
          <Text>Diego</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bigButton}
          onPress={() => navigation.navigate('PeopleScreen', { id: 2, name: 'Veronica' })}
        >
          <Text>Veronica</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PageOneScree;
