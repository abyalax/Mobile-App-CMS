import { View, Text, StyleSheet, Button, TextInput, Alert } from 'react-native'
import React, { useState } from 'react'

const FormInput = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const onPressRegister = () => {
        if (!name || !email) {
            Alert.alert('Error', 'Name and Email are required.');
            return;
        }

        Alert.alert('Success', `Name: ${name}, Email: ${email}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Create Your Account</Text>

            <Text>Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                placeholder='Enter your Name'
                placeholderTextColor="gray"
                value={name}
            />

            <Text>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                placeholder='Enter your Email'
                placeholderTextColor="gray"
                value={email}
                keyboardType='email-address'
            />

            <Button
                onPress={onPressRegister}
                title="Register"
                color="#007AFF"
                accessibilityLabel="Register for an account"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        padding: 20,
        backgroundColor: 'transparent',
        flex: 1, 
        justifyContent: 'center',
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        minWidth: 300,
        borderColor: 'gray',
        borderRadius: 12,
        borderWidth: 1,
        marginBottom: 12,
        paddingHorizontal: 10,
    },
})

export default FormInput;
