import { View, StyleSheet } from 'react-native';
import React from 'react';
import RegisterView from '../views/auth/register';
import LoginView from '../views/auth/login';
import HomeViews from '../views/home';

const AppShell = () => {
    return (
        <View style={styles.container}>
            {/* <LoginView/> */}
            {/* <RegisterView/> */}
            <HomeViews/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AppShell;
