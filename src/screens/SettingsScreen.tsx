// @packages
import { View, Text } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// @styles
import styles from '../theme/appTheme';

const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{ ...styles.globalMargin, marginTop: insets.top + 20 }}>
      <Text style={ styles.title }>
        Settings Screen
      </Text>
    </View>
  );
};

export default SettingsScreen;
