import {useTheme} from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import {Tabs} from 'react-native-collapsible-tab-view'
import {FONTS, images, SIZES} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {HeaderProfile, BasicInfomation} from '../components/profile';

const AVATAR_SIZE = SIZES.width / 2.5;

const DATA = [0, 1, 2, 3, 4]
const identity = (v) => v + ''

const Profile = ({navigation, route}) => {
  const renderItem = React.useCallback(({ index }) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    )
  }, [])
  return (
    <SafeAreaView style={{...styles.container}}>
      
      <Tabs.Container
        renderHeader={()=><>
          <HeaderProfile/>
        </>}
        headerHeight={100}
      >
        <Tabs.Tab
          name='Support'
          label='Hỗ trợ'
        >
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab
          name='Consult'
          label='Tư vấn'
        >
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab
          name='Notification'
          label='Thông báo'
        >
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
      </Tabs.Container>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
  },
  cover: {
    height: SIZES.height / 3,
  },
  coverImage: {
    flex: 1,
    height: null,
    width: null,
  },
  changeImageButton: {
    position: 'absolute',
    right: SIZES.padding,
    bottom: SIZES.padding,
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: SIZES.radius * 2,
  },
  avatarBox: {
    height: AVATAR_SIZE,
    width: AVATAR_SIZE,
    alignSelf: 'center',
    marginTop: -AVATAR_SIZE / 2,
    borderRadius: AVATAR_SIZE / 2,
    borderWidth: 5,
  },
  avatar: {
    flex: 1,
    borderRadius: AVATAR_SIZE / 2,
  },
  name: {
    textAlign: 'center',
    margin: SIZES.padding * 2,
  },
  box: {
    height: 250,
    width: '100%',
  },
  boxA: {
    backgroundColor: 'white',
  },
  boxB: {
    backgroundColor: '#D8D8D8',
  },
  header: {
    width: '100%',
    backgroundColor: '#2196f3',
  },
});
