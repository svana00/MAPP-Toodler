import React from 'react';
import { Image } from 'react-native';
import styles from './styles';

const BoardThumbnail = ({ id, name, thumbnailPhoto }) => (
  <Image
    style={styles.image}
    resizeMode="cover"
    source={{ uri: thumbnailPhoto }}
  />
);

export default BoardThumbnail;
