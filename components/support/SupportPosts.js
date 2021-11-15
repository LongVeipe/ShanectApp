import {useTheme} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {COLORS, DEFINES, FONTS, SIZES} from '../../constants';
import FBGrid from 'react-native-fb-image-grid';
import {Divider} from 'react-native-paper';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {
  showImageModal,
  closeImageModel,
  onScrollY,
} from '../../redux/reducers/supportActions';
import ImageViewing from 'react-native-image-viewing';

const SupportPosts = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const isVisibleModal = useSelector(
    state => state.supportReducer.isVisibleModal,
  );
  const FILTER_HEIGHT = DEFINES.SUPPORT_FILTER_HEIGHT + SIZES.padding * 2;
  const [imageSelected, setImageSelected] = useState(0);

  const scrollY = useSelector(state => state.supportReducer.scrollY);

  const onShowModal = (url, index, event) => {
    dispatch(showImageModal());
    setImageSelected(index);
  };
  const onCloseModel = () => {
    dispatch(closeImageModel());
  };

  const data = [
    {
      id: 1,
      avatar:
        'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-nen-khung-long-cute.jpg',
      name: 'Nguyễn Đình Long',
      contain:
        'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a aasdfas  a a â  a fasdf   a f á f á ',
      img: [
        'https://www.pixelstalk.net/wp-content/uploads/2016/11/Dark-Abstract-Phone-Background.jpg',
        'https://i.pinimg.com/originals/76/6e/62/766e6222986cf3afcdfe7b3a7efda1c5.jpg',
        'https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg',
        'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
        'https://wallpaperaccess.com/full/459246.jpg',
        'https://i.pinimg.com/736x/6a/28/78/6a28787df7574756ac957c552aa4a249.jpg',
        'https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-3.jpg',
      ],
    },
    {
      id: 2,
      avatar:
        'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-nen-khung-long-cute.jpg',
      name: 'Nguyễn Đình Long',
      contain:
        'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a aasdfas  a a â  a fasdf   a f á f á ',
      img: [
        'https://www.pixelstalk.net/wp-content/uploads/2016/11/Dark-Abstract-Phone-Background.jpg',
        'https://i.pinimg.com/originals/76/6e/62/766e6222986cf3afcdfe7b3a7efda1c5.jpg',
        'https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg',
        'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
        'https://wallpaperaccess.com/full/459246.jpg',
        'https://i.pinimg.com/736x/6a/28/78/6a28787df7574756ac957c552aa4a249.jpg',
        'https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-3.jpg',
      ],
    },
    {
      id: 3,
      avatar:
        'https://toigingiuvedep.vn/wp-content/uploads/2021/05/hinh-nen-khung-long-cute.jpg',
      name: 'Nguyễn Đình Long',
      contain:
        'a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a aasdfas  a a â  a fasdf   a f á f á ',
      img: [
        'https://www.pixelstalk.net/wp-content/uploads/2016/11/Dark-Abstract-Phone-Background.jpg',
        'https://i.pinimg.com/originals/76/6e/62/766e6222986cf3afcdfe7b3a7efda1c5.jpg',
        'https://i.pinimg.com/originals/2e/c6/b5/2ec6b5e14fe0cba0cb0aa5d2caeeccc6.jpg',
        'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg',
        'https://wallpaperaccess.com/full/459246.jpg',
        'https://i.pinimg.com/736x/6a/28/78/6a28787df7574756ac957c552aa4a249.jpg',
        'https://www.nawpic.com/media/2020/wallpaper-for-phone-nawpic-3.jpg',
      ],
    },
  ];
  const Post = ({item}) => {
    return (
      <View style={{...styles.post, backgroundColor: theme.colors.background}}>
        <View style={{...styles.info}}>
          <Image
            source={{
              uri: item.avatar,
            }}
            style={{...styles.avatar}}
          />
          <View style={{flex: 1, paddingLeft: SIZES.padding}}>
            <Text style={{...FONTS.h4, color: theme.colors.text, opacity: 0.9}}>
              {item.name}
            </Text>
            <Text style={{fontSize: 13, marginTop: SIZES.padding / 2}}>
              1, Th9, 2021
            </Text>
          </View>
        </View>
        <Text
          style={{
            fontSize: 16,
            color: theme.colors.text,
            paddingHorizontal: SIZES.padding,
            paddingBottom: SIZES.padding / 2,
          }}>
          {item.contain}
        </Text>
        {/* {renderImages()} */}
        <FBGrid
          images={item.img}
          style={{...styles.imageGrid}}
          onPress={onShowModal}
        />
        <Divider style={{marginHorizontal: SIZES.padding}} />
        <View style={{...styles.userInteraction}}>
          <TouchableOpacity style={{...styles.interactionButton}}>
            <AntDesign name="like2" size={20} />
            <Text
              style={{
                ...FONTS.body3,
                marginLeft: SIZES.padding / 2,
                fontWeight: 'bold',
              }}>
              Thích
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.interactionButton}}>
            <FontAwesome name="comment-o" size={20} />
            <Text
              style={{
                ...FONTS.body3,
                marginLeft: SIZES.padding / 2,
                fontWeight: 'bold',
              }}>
              Bình luận
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={{...styles.interactionButton}}>
            <AntDesign name="sharealt" size={20} />
            <Text
              style={{
                ...FONTS.body3,
                marginLeft: SIZES.padding / 2,
                fontWeight: 'bold',
              }}>
              Chia sẻ
            </Text>
          </TouchableOpacity>
        </View>
        <ImageViewing
          images={item.img.map((img, key) => ({uri: img}))}
          imageIndex={imageSelected}
          visible={isVisibleModal}
          presentationStyle="overFullScreen"
          onRequestClose={onCloseModel}
        />
      </View>
    );
  };
  return (
    <Animated.FlatList
      style={{...styles.container}}
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={item => `${item.id}`}
      contentContainerStyle={{
        paddingVertical: FILTER_HEIGHT,
        paddingHorizontal: SIZES.padding,
      }}
      renderItem={Post}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {y: scrollY}}}], {
        listener: event => {
          dispatch(onScrollY())
        },
        useNativeDriver: true,
      })}
    />
  );
};

export default SupportPosts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 1,
  },
  post: {
    borderRadius: SIZES.radius / 3,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginBottom: SIZES.padding,
  },
  info: {
    flexDirection: 'row',
    paddingHorizontal: SIZES.padding,
    paddingTop: SIZES.padding,
  },
  avatar: {
    borderRadius: SIZES.radius,
    height: 50,
    width: 50,
  },
  images: {
    flexDirection: 'row',
    height: 150,
    marginVertical: SIZES.padding,
  },
  imageCoat: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    opacity: 0.8,
    backgroundColor: COLORS.black,
  },
  imageGrid: {
    minHeight: 250,
    maxHeight: 300,
    marginBottom: SIZES.padding,
  },
  userInteraction: {
    height: 50,
    flexDirection: 'row',
  },
  interactionButton: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
});
