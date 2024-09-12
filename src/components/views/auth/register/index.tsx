import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';

const RegisterView = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    if (!name || !email) {
      Alert.alert('Error', 'Name and Email are required.');
      return;
    }
    Alert.alert('Success', `Name: ${name}, Email: ${email}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Account</Text>
      <Text style={styles.text}>Name</Text>
      <TextInput
        style={styles.input}
        mode="outlined"
        placeholder='Enter your Name'
        value={name}
        onChangeText={text => setName(text)}
      />

      <Text style={styles.text}>Email</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        placeholder='Enter your Email'
        value={email}
        onChangeText={text => setEmail(text)}
      />

      <Text style={styles.text}>Password</Text>
      <TextInput
        style={styles.input}
        mode='outlined'
        placeholder='Enter your Password'
        value={password}
        onChangeText={text => setPassword(text)}
      />
      <Button mode="outlined" textColor='black' buttonColor='white' labelStyle={{ fontSize: 18, fontWeight: 'bold' }} style={styles.button} onPress={handleRegister}>
        Register
      </Button>

      <View style={{marginTop: 16}}>
        <Text style={styles.text}>
          Already Have an Account ? Login
        </Text>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: '#1A1A1A'
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'white',
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 6,
  },
  input: {
    minWidth: 300,
    marginBottom: 12,
  },
  button: {
    marginTop: 20,
    fontSize: 20,
    paddingVertical: 6
  },
});

export default RegisterView;
