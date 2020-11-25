import React from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import styles from './styles';
import Headings from '../../styles/headings'


const TaskThumbnail = ({
 id, name, description, isFinished
}) => (
    <View style={ [ styles.container, !hasSelectedImages ? { color: 'rgba(155, 155, 155, .5)' } : {} ] }>
      <Text style={Headings.h3}>{name}</Text>
      <Text style={Headings.h4}> {description} </Text>
    </View>
);

export default TaskThumbnail;
