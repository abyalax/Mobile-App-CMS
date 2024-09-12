import { StatusBar, StyleSheet, View } from 'react-native';
import React from 'react';
import { PaperProvider } from 'react-native-paper';
import AppShell from '../components/fragments/AppShell';

const App = () => {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" translucent />
            <PaperProvider>
                <AppShell />
            </PaperProvider>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
