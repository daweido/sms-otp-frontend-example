import React, {useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

interface Props {
  onFulfill: any;
}

const CELL_COUNT = 4;

export default function VerificationCodeInput({onFulfill}: Props) {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const onValueChange = (verificationCode: string) => {
    setValue(verificationCode);

    if (verificationCode.length === CELL_COUNT) {
      onFulfill(verificationCode);
    }
  };

  return (
    <>
      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={onValueChange}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  codeFieldRoot: {
    justifyContent: 'flex-start',
    marginTop: 30,
  },
  cell: {
    width: 55,
    height: 55,
    lineHeight: 50,
    fontSize: 28,
    borderWidth: 1.5,
    borderRadius: 4,
    borderColor: '#86f2ff',
    textAlign: 'center',
    justifyContent: 'center',
    marginRight: 13,
    backgroundColor: 'rgba(31,31,31, 0.05)',
    color: '#fff',
  },
  focusCell: {
    borderColor: '#F564A9',
  },
  errorMessage: {
    fontSize: 16,
    lineHeight: 16 * 1.3,
  },
});
