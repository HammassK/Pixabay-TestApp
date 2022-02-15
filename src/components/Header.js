import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

import {Overlay} from 'react-native-elements';

const Header = props => {
  const [visible, setVisible] = useState(false);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Overlay
        isVisible={visible}
        onBackdropPress={toggleOverlay}
        fullScreen={true}
        overlayStyle={styles.overlayStyle}>
        <View style={styles.cancelBtn}>
          <TouchableOpacity onPress={toggleOverlay}>
            <Icon name="close" size={hp('5')} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.menuLabels}>
          <Text style={styles.overlayLabels}>Login</Text>
          <Text style={styles.overlayLabels}>Signup</Text>
          <Text style={styles.overlayLabels}>Terms & Conditions</Text>
          <Text style={styles.overlayLabels}>Privacy Policy</Text>
        </View>
      </Overlay>

      <View>
        <TouchableOpacity onPress={() => toggleOverlay()}>
          <Icon name="menu" size={hp('3')} color={'#ffffff'} />
        </TouchableOpacity>
      </View>

      <View>
        <Text style={styles.headerTitle}>Test Application</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon name="notifications" size={hp('3')} color={'#ffffff'} />
        <Icon name="mail" size={hp('3')} color={'#ffffff'} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#174255',
    width: wp('100'),
    height: hp('10'),
    flexDirection: 'row',
    paddingHorizontal: hp('2'),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  headerTitle: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    color: '#b7cedf',
  },
  overlayLabels: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: '#000',
    paddingVertical: hp('2'),
  },
  cancelBtn: {
    width: wp('90'),
    alignItems: 'flex-end',
  },
  menuLabels: {
    height: hp('50'),
    alignItems: 'center',
  },
  overlayStyle: {
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});

export default Header;
