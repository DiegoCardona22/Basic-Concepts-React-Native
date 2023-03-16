// @packages
import { View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

const AlbumScreen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Album</Text>
    </View>
  );
};

export default AlbumScreen;
