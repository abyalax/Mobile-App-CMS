import { View, StatusBar, Image, Text, StyleSheet, ImageBackground } from 'react-native';
import React from 'react';
import styles from './style';
import { dataCard } from '@/src/dummyData/data';
import Card from '../../fragments/card/Card';
import Header from '../../fragments/header';
import { IconButton } from 'react-native-paper';
import { timeSinceUpload } from '@/src/utils';
import { globalStyles } from '@/src/styles/style';

const HomeViews = () => {

  const image = { uri: "https://i.pinimg.com/236x/36/69/54/366954a966d628a7e90ab517312d0a16.jpg" };
  const profile = { uri: "https://i.pinimg.com/564x/b7/aa/12/b7aa12ee3634660c245cfccc766e3318.jpg" };


  const renderHeader = () => (
    <View>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <View style={styles.banner}>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 17, marginBottom: 10 }}>Continue Reading</Text>
        <View style={styles.bannerImageContainer}>
          <ImageBackground source={image} imageStyle={styles.bannerImage}>
            <View style={styles.bannerWrapper}>
              <View style={styles.bannerContent}>
                <View style={[styles.bannerItem, { maxWidth: 200 }]}>
                  <Text style={styles.bannerItemText}>Understanding Econoomics:</Text>
                </View>
                <View style={[styles.bannerItem, { maxWidth: 250 }]}>
                  <Text style={styles.bannerItemText}>Allocation of Limited Resources.</Text>
                </View>
                <View style={styles.author}>
                  <Image source={profile} style={styles.authorImage} />
                  <Text style={styles.authorText}>Nicholas Saputra </Text>
                </View>
              </View>
              <View style={styles.bannerAction}>
                <View style={[globalStyles.row, globalStyles.btn, { maxWidth: 80, height: 35, borderWidth: 2, borderColor: 'white' }]}>
                  <IconButton icon="heart" size={18} onPress={() => { }} />
                  <Text style={{ fontSize: 12, color: 'white', marginRight: 8 }}>{664}</Text>
                </View>
                <View style={[globalStyles.row, globalStyles.btn, { maxWidth: 80, height: 35, paddingHorizontal: 14, borderWidth: 2, borderColor: 'white' }]}>
                  <Text style={{ fontSize: 13, color: 'white' }}>+{timeSinceUpload(new Date('2024-09-11T00:00:00Z'))}</Text>
                </View>
              </View>
            </View>
          </ImageBackground>
        </View>
      </View>
      <View>
        <Text style={{ fontFamily: 'Inter_700Bold', fontSize: 17, marginVertical: 10 }}>Selected For You</Text>
      </View>
    </View >
  );

  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent={true}
      />
      <Header />
      <View style={styles.container}>
        <Card data={dataCard} renderHeader={renderHeader} handleLike={() => console.log('Pressed')} />
      </View>
    </>
  );
};

export default HomeViews;
