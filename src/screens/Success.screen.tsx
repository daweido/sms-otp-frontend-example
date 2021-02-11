import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

export default function SuccessScreen() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Text style={styles.title}>You are logged in!</Text>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.pop(2)}>
        <Text style={styles.buttonLabel}>Go home</Text>
      </TouchableOpacity>
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
