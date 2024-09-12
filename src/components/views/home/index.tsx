import { Image, View, ScrollView, Text } from 'react-native';
import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './style';
import { dataCard, dataCategory } from '@/src/dummyData/data';
import Card from '../../fragments/card/Card';
import Header from '../../fragments/header';

const HomeViews = () => {

  const renderHeader = () => (
    <View>
      <View>
        <Text style={styles.bannerText}>Continue Reading</Text>
        <Image style={{ width: 366, height: 190, borderRadius: 20 }} source={require('../../../../public/assets/postImage.jpg')} />
      </View>
      <View>
        <Text style={styles.bannerText}>Selected For You</Text>
      </View>
    </View >
  );

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Card data={dataCard} renderHeader={renderHeader} handleLike={() => console.log('Pressed')} like={654} postTime='5 Mins' />
      </View>
    </>
  );
};

export default HomeViews;
