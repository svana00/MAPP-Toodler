import React from 'react';
import {
  View, Text, TouchableHighlight, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import logo from '../../resources/logo.png';
import styles from './styles';

const Main = ({ navigation: { navigate } }) => (
  <View style={styles.container}>
    <View style={styles.smallContainer}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.header}>toodler</Text>
    </View>

    <View style={styles.container}>
      <Text style={styles.paragraph}>SO SIMPLE, A CHILD COULD USE IT</Text>
      <TouchableHighlight style={styles.button} onPress={() => navigate('Boards')}>
        <Text style={styles.buttonText}>GET STARTED</Text>

      </TouchableHighlight>
    </View>
  </View>
);

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default Main;
