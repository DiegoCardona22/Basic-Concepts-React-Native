// @packages
import { useContext } from 'react';
import { View, Text, Button } from 'react-native';

// @scripts
import { AuthContext } from '../context/AuthContext';

// @styles
import styles from '../theme/appTheme';

const ContactsScreen = () => {
  const { authState, signIn, logout } = useContext(AuthContext);

  return (
    <View style={ styles.globalMargin }>
      <Text style={ styles.title }>Contacts</Text>

      {!authState.isLoggedIn && (
        <Button title="Sign In" onPress={() => signIn()} />
      )}

      {authState.isLoggedIn && (
        <Button title="Logout" onPress={() => logout()} />
      )}
    </View>
  );
};

export default ContactsScreen;
