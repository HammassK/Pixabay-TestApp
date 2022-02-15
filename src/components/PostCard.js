import React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Card} from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';

const PostCard = props => {
  const imageURI = props.data.userImage;
  const postURI = props.data.largeImageURL;

  return (
    <Card containerStyle={styles.container}>
      <View style={styles.userInfo}>
        <Image
          style={styles.image}
          resizeMode="cover"
          source={{
            uri: imageURI,
          }}
        />
        <Card.Title style={styles.userName}>{props.data.userName}</Card.Title>
      </View>
      <View>
        <Card.Image
          style={{width: wp('80'), borderRadius: hp('1')}}
          source={{
            uri: postURI,
          }}
        />
      </View>
      <View style={styles.imageInfo}>
        <View style={styles.likesContainer}>
          <Icon name="heart-circle" size={hp('3')} color={'#000000'} />
          <Text style={styles.labelText}>{props.data.imageLikes}</Text>
        </View>
        <View style={styles.likesContainer}>
          <Icon name="eye" size={hp('3')} color={'#000000'} />
          <Text style={styles.labelText}>{props.data.imageViews}</Text>
        </View>
      </View>
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    width: wp('90'),
    flexDirection: 'row',
    marginVertical: hp('2'),
    borderRadius: hp('2'),
  },
  iconContainer: {
    flexDirection: 'row',
  },
  PostCardTitle: {
    fontSize: hp('3'),
    fontWeight: 'bold',
    color: '#b7cedf',
  },
  userInfo: {
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: hp('1'),
  },
  userName: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: hp('2'),
    marginTop: hp('1'),
  },
  imageInfo: {
    flexDirection: 'row',
  },
  image: {
    width: wp('10'),
    height: hp('5'),
    borderRadius: hp('100'),
  },
  likesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('1'),
    paddingHorizontal: hp('0.5'),
  },
  labelText: {
    fontSize: hp('2'),
    fontWeight: 'bold',
    color: '#000',
    paddingHorizontal: hp('0.2'),
  },
});

export default PostCard;
