// @packages
import { StackScreenProps } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

interface PageThirdScreenProps {
  navigation: StackScreenProps<any, any>['navigation'];
}

const PageThirdScreen = ({
  navigation,
}: PageThirdScreenProps) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        Page Third Screen
      </Text>

      <Button title="Go back" onPress={() => navigation.pop()} />
      <Button title="Go to Page One" onPress={() => navigation.popToTop()} />
    </View>
  );
};

export default PageThirdScreen;
