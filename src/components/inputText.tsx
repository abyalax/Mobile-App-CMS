import React from 'react';
import {SafeAreaView, StyleSheet, TextInput} from 'react-native';

type Props = {
    onChange: (value: string) => void
    placeholder?: string
}

const InputText = (props : Props) => {
    const {onChange, placeholder} = props

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}
        onChangeText={onChange}
        placeholder={placeholder}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    color: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 12
  },
});

export default InputText;