// @packages
import Icon from 'react-native-vector-icons/Ionicons';
import { View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

const Tab1Screen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Tab 1</Text>
      <Icon name="airplane-outline" size={ 80 } color="black" />
    </View>
  );
};

export default Tab1Screen;
