import { View, Text, StyleSheet, Alert } from 'react-native';
import { useState } from 'react';
import { Button, TextInput } from 'react-native-paper';
import { Link, router } from 'expo-router';

const LoginView = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = () => {
        router.navigate('/home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login to Your Account</Text>

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

            <Button mode="outlined" textColor='black' buttonColor='#595959' labelStyle={{ fontSize: 18, fontWeight: 'bold', paddingVertical: 6 }} style={styles.button} onPress={handleRegister}>
                Login
            </Button>

            <View style={{ marginTop: 16 }}>
                <Text style={styles.text}>
                    Don't Have an Account ? <Link href={'/auth/register'}>Register</Link>
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
    },
});

export default LoginView;
