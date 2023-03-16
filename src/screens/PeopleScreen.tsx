// @packages
import { StackScreenProps } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

interface PeopleScreenProps {
  navigation: StackScreenProps<any, any>['navigation'];
  route: StackScreenProps<any, any>['route'];
}

const PeopleScreen = ({
  navigation,
  route,
}: PeopleScreenProps) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        People Screen
      </Text>

      <Text>{ JSON.stringify(route.params, null, 3) }</Text>

      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go to Page One" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default PeopleScreen;
