import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {StatusBar, StyleSheet, View, FlatList} from 'react-native';
import Header from './src/components/Header';
import PostCard from './src/components/PostCard';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const App = () => {
  const [imageData, setImageData] = useState([]);
  const getImagesFromAPI = async () => {
    try {
      const res = await axios.get(
        'https://pixabay.com/api/?key=13343754-0f1197792ff2db53ec457f871',
      );

      const transformedData = res.data.hits.map(data => {
        return {
          userImage: data.userImageURL,
          userName: data.user,
          imageId: data.id,
          previewImageURL: data.previewURL,
          largeImageURL: data.largeImageURL,
          imageLikes: data.likes,
          imageComments: data.comments,
          imageViews: data.views,
        };
      });
      setImageData(transformedData);
    } catch (error) {
      console.log('ERROR', error);
    }
  };
  useEffect(() => {
    getImagesFromAPI();
  }, []);

  const renderImagesList = ({item, index}) => {
    return <PostCard data={item} index={index} />;
  };

  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} />
      <Header />
      <View style={styles.listContainer}>
        <View>
          <FlatList
            data={imageData}
            renderItem={renderImagesList}
            ListFooterComponent={<View style={{height: hp('20%')}} />}
            nestedScrollEnabled={true}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#b7cedf',
    alignItems: 'center',
  },
  listContainer: {
    width: wp('100%'),
    alignItems: 'center',
    flexDirection: 'row',
  },
  animatedBox: {
    flex: 1,
    backgroundColor: '#b7cedf',
    alignItems: 'center',
  },
  drawerButton: {
    width: wp('40'),
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: hp('50'),
  },
  drawerLabel: {
    fontSize: hp('2'),
    color: '#000',
    fontWeight: 'bold',
  },
});

export default App;
