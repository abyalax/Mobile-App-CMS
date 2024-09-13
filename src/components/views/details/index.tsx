import { View, Text, StatusBar, ScrollView, StyleSheet, ImageBackground, Image, Platform } from 'react-native'
import React from 'react'
import HeaderBack from '../../fragments/backHeader';
import { styles } from './style';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_800ExtraBold,
    Inter_900Black,
} from '@expo-google-fonts/inter';


const DetailsView = () => {

    let [fontsLoaded] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
        Inter_800ExtraBold,
        Inter_900Black,
    });

    const image = { uri: "https://i.pinimg.com/564x/20/c7/90/20c79098f81ddb104b12224bf1c8856e.jpg" };
    const profile = { uri: "https://i.pinimg.com/564x/b7/aa/12/b7aa12ee3634660c245cfccc766e3318.jpg" };
    if (fontsLoaded) {
        return (
            <View style={styles.container}>
                <StatusBar
                    barStyle="dark-content"
                    backgroundColor="transparent"
                    translucent={true}
                />
                <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                    <HeaderBack />
                    <ScrollView style={styles.scrollContainer}>
                        <Text style={{ fontFamily: 'Inter_900Black', fontSize: 20 }}>
                            Understanding Economics:{'\n'} Allocation of Limited Resources.
                        </Text>
                        <View style={styles.author}>
                            <Image style={styles.authorImage} source={profile} />
                            <Text style={{ textDecorationLine: 'underline', fontFamily: 'Inter_400Regular' }}>Nicholas Saputra </Text>
                            <Text style={{color: '#5B949E', fontFamily: 'Inter_500Medium'}}>~ Follow</Text>
                        </View>
                        <ScrollView style={styles.content}>
                            <Text style={{fontFamily: 'Inter_400Regular', fontSize: 16}}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore reiciendis sunt magni, nihil rerum velit odit, mollitia, itaque iusto aliquam accusamus! Quae debitis ipsum vitae eligendi odit molestiae tempore?{'\n'} {'\n'}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum, dolore aut velit est optio! Similique veritatis cumque est. Perferendis architecto excepturi magnam, dolorum itaque consequuntur eligendi omnis hic sint!.{'\n'} {'\n'}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum, dolore aut velit est optio! Similique veritatis cumque est. Perferendis architecto excepturi magnam, dolorum itaque consequuntur eligendi omnis hic sint!.{'\n'} {'\n'}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore reiciendis sunt magni, nihil rerum velit odit, mollitia, itaque iusto aliquam accusamus! Quae debitis ipsum vitae eligendi odit molestiae tempore?{'\n'} {'\n'}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolorum, dolore aut velit est optio! Similique veritatis cumque est. Perferendis architecto excepturi magnam, dolorum itaque consequuntur eligendi omnis hic sint!.{'\n'} {'\n'}
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia dolore reiciendis sunt magni, nihil rerum velit odit, mollitia, itaque iusto aliquam accusamus! Quae debitis ipsum vitae eligendi odit molestiae tempore?{'\n'} {'\n'}
                            </Text>
                        </ScrollView>
                    </ScrollView>
                </ImageBackground>
            </View>
        )
    } else {
        return (
            <View>
                <Text>Loading</Text>
            </View>
        )
    }
}

export default DetailsView