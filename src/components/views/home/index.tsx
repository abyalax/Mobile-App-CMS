import { Image, View, StyleSheet, Text, ScrollView, FlatList, StatusBar } from 'react-native';
import React from 'react';
import { Appbar, Card } from 'react-native-paper';

const HomeViews = () => {
  const _handleSearch = () => console.log('Searching');
  const data = ['+For You', 'Finance', 'NewsPaper', 'Trending', 'Education', 'Government', 'Education',];

  const dataCard = Array.from({ length: 20 }, (_, index) => ({
    id: index.toString(),
    title: `Card Title ${index + 1}`,
    content: `This is the content of card ${index + 1}.`
  }));

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="transparent"
        barStyle={'dark-content'}
      />
      <Appbar.Header style={styles.header}>
        <Appbar.Content title="Morning, Alex" color='black' titleStyle={{ fontSize: 25, fontWeight: 'bold' }} />
        <Appbar.Action icon="bell-ring-outline" onPress={_handleSearch} iconColor='black' />
      </Appbar.Header>


      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {data.map((item, index) => (
          <View key={index} style={styles.itemContainer}>
            <Text style={styles.itemText}>{item}</Text>
          </View>
        ))}
      </ScrollView>

      <View style={styles.banner}>
        <Text style={styles.bannerText}>Continue Reading</Text>
        <Image style={{ width: 366, height: 190, borderRadius: 20 }} source={require('../../../../public/assets/postImage.jpg')} />
      </View>

      <FlatList
        data={dataCard}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={(item) => (
          <Card style={styles.card}>
            <Card.Title title={item.item.title} />
            <Card.Content>
              <Text>{item.item.content}</Text>
            </Card.Content>
          </Card>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 0,
  },
  header: {
    backgroundColor: 'white',
    color: 'black',
    fontSize: 30,
    paddingHorizontal: 5,
  },
  scrollContainer: {
    marginTop: 20,
    height: 60,
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginBottom: 6,
    borderBottomWidth: 1,
    borderColor: 'gray',
  },
  itemContainer: {
    marginRight: 20,
  },
  itemText: {
    fontSize: 20,
    color: 'black',
  },
  list: {
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  card: {
    marginBottom: 20, // Jarak antar card
    borderRadius: 8,
    elevation: 4, // Shadow untuk card di Android
    shadowColor: '#000', // Shadow untuk iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  banner: {
  },
  bannerText: {
    fontSize: 20,
    marginVertical: 20,
    fontWeight: 'bold'
  }
});

export default HomeViews;
