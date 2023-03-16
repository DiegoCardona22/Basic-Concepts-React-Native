// @packages
import { View, Text } from 'react-native';

// @styles
import styles from '../theme/appTheme';

const ChatScreen = () => {
  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Chat</Text>
    </View>
  );
};

export default ChatScreen;
