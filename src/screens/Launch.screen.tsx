import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {login} from '../services/user.service';

export default function LaunchScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signInHandler = () => {
    login({username, password}).then((res) => {
      if (res.success) {
        navigation.navigate('CodeVerificationScreen', {userId: res.userId});
      }
    });
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.title}>SMS OTP</Text>
      <View style={styles.authContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}>Username</Text>
          <TextInput
            defaultValue={username}
            onChangeText={setUsername}
            style={styles.inputStyle}
            placeholder="Enter your username"
            autoCorrect={false}
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.labelInput}>Password</Text>
          <TextInput
            defaultValue={password}
            onChangeText={setPassword}
            style={styles.inputStyle}
            placeholder="Enter your password"
            autoCorrect={false}
            autoCapitalize="none"
            secureTextEntry
          />
        </View>
        <TouchableOpacity style={styles.buttonStyle} onPress={signInHandler}>
          <Text style={styles.buttonLabel}>Sign in</Text>
        </TouchableOpacity>
      </View>
      <View />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#2e2b56',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    marginTop: 20,
  },
  inputContainer: {
    width: '75%',
    marginBottom: 24,
  },
  labelInput: {
    marginBottom: 8,
    fontSize: 16,
    color: 'white',
  },
  inputStyle: {
    backgroundColor: 'white',
    padding: 8,
    borderRadius: 5,
  },
  buttonStyle: {
    width: '75%',
    paddingVertical: 12,
    backgroundColor: '#86f2ff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonLabel: {
    fontWeight: 'bold',
    color: '#2e2b56',
  },
  authContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
