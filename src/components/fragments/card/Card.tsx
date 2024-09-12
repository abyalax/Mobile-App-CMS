import { View, Text, FlatList, Image } from 'react-native'
import { styles } from './style'
import { IconButton, Icon } from 'react-native-paper'

interface Props {
  renderHeader: () => JSX.Element
  data: { id: string, authorName: string, title: string, content: string }[]
  handleLike: () => void
  like: number
  postTime: string
}

const Card = (props: Props) => {
  const { renderHeader, data, handleLike, like, postTime } = props

  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={renderHeader}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.row}>
              <Image source={require('../../../../public/assets/postImage.jpg')} style={styles.cardImage} />
              <View style={styles.cardContent}>
                <Text style={styles.author}>{item.authorName}</Text>
                <Text style={styles.title}>{item.title.length > 23 ? item.title.substring(0, 23) + '...' : item.title}</Text>
                <Text style={styles.textContent}>{item.content.substring(0, 23) + '...'}</Text>
              </View>
              <View style={[styles.column, { gap: 10 }, { alignItems: 'flex-end' }]}>
                <View style={[styles.row, styles.btn, { maxWidth: 80 }]}>
                  <IconButton icon="heart" size={18} onPress={() => handleLike} />
                  <Text style={{ fontSize: 12 }}>{like}</Text>
                </View>
                <View style={[styles.row, styles.btn, { maxWidth: 80, paddingVertical: 5, paddingHorizontal: 14 }]}>
                  <Text style={{ fontSize: 13 }}>+{postTime}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
    </View>
  )
}

export default Card