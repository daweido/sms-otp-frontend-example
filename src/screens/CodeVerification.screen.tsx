import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import VerificationCodeInput from '../components/VerificationCodeInput.component';
import {submitVerificationCode} from '../services/user.service';
import {Flow} from 'react-native-animated-spinkit';

export default function CodeVerification({route}) {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const onCodeInputFulfilled = (value: string) => {
    setIsProcessing(true);
    submitVerificationCode(value, route.params.userId).then((res) => {
      setIsProcessing(false);
      if (res.success) {
        navigation.navigate('SuccessScreen');
      } else {
        setErrorMessage(res.errorMessage);
      }
    });
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.title}>Verification Code</Text>
      <VerificationCodeInput onFulfill={onCodeInputFulfilled} />
      {isProcessing && (
        <Flow size={70} color="#F564A9" style={{marginTop: 90}} />
      )}
      {errorMessage.length !== 0 && (
        <View style={{marginTop: 90, width: '100%', alignItems: 'center'}}>
          <Text style={styles.errorMessageText}>{errorMessage}</Text>
          <TouchableOpacity
            style={styles.buttonStyle}
            onPress={() => navigation.goBack()}>
            <Text style={styles.buttonLabel}>Go back</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#2e2b56',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 32,
    color: 'white',
    marginVertical: 20,
  },
  errorMessageText: {
    color: '#F564A9',
    fontSize: 18,
    marginBottom: 20,
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
});
