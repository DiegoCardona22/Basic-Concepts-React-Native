// @packages
import { StackScreenProps } from '@react-navigation/stack';
import { Button, View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

interface PageSecondScreenProps {
  navigation: StackScreenProps<any, any>['navigation'];
}

const PageSecondScreen = ({
  navigation,
}: PageSecondScreenProps) => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>
        Page Second Screen
      </Text>

      <Button title="Go to Page Three" onPress={() => navigation.navigate('PageThree')} />
    </View>
  );
};

export default PageSecondScreen;
