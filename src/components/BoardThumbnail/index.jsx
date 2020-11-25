import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';

const BoardThumbnail = ({
 id, name, thumbnailPhoto, navigation: { navigate }
}) => (
  <TouchableOpacity onPress={() => navigate('Board', { boardId: id })}>
    <View>
      <Text>{name}</Text>
      <Image
        style={styles.image}
        resizeMode="cover"
        source={{ uri: thumbnailPhoto }}
      />
    </View>
  </TouchableOpacity>
);

export default withNavigation(BoardThumbnail);
