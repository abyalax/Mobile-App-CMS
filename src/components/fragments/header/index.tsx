import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import {styles} from './style'
import { IconButton } from 'react-native-paper'
import { dataCategory } from '@/src/dummyData/data';

const Header = () => {
    const _handleSearch = () => console.log('Searching');
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Good Night, Abya🙌</Text>
        <IconButton icon={"bell-ring-outline"} iconColor='black' onPress={_handleSearch}/>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
        {dataCategory.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

export default Header