import { View, Text, FlatList, Image } from 'react-native'
import { styles } from './style'
import { IconButton, Icon } from 'react-native-paper'
import { timeSinceUpload } from '@/src/utils'
import { router } from 'expo-router'

interface Props {
  renderHeader: () => JSX.Element
  data: { id: string, authorName: string, title: string, content: string, createdAt: string, like: number }[]
  handleLike: () => void
}

const Card = (props: Props) => {
  const { renderHeader, data, handleLike } = props
  return (
    <View>
      <FlatList
        onTouchEnd={() => router.navigate('/posts/details')}
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
                  <Text style={{ fontSize: 12 }}>{item.like}</Text>
                </View>
                <View style={[styles.row, styles.btn, { maxWidth: 80, paddingVertical: 5, paddingHorizontal: 14 }]}>
                  <Text style={{ fontSize: 13 }}>+{timeSinceUpload(new Date(item.createdAt))}</Text>
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