import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
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
import {MaterialTabBar, Tabs} from 'react-native-collapsible-tab-view';
import {FONTS, images, SIZES, DEFINES, BASE_URL} from '../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HeaderProfile,
  BasicInfomation,
  SupportListHeader,
} from '../components/profile';
import {TabBar} from 'react-native-tab-view';
import {changeAccountInfo} from '../redux/reducers/profileActions'
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

const AVATAR_SIZE = SIZES.width / 2.5;

const DATA = [0, 1, 2, 3, 4];
const identity = v => v + '';

const Profile = ({navigation, route}) => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(state=>state.profileReducer.accountInfo)
  useEffect(() => {
    getAccountInfo();
  }, []);
  const getAccountInfo = async () => {
    let value = '';
    try {
      value = await AsyncStorage.getItem(DEFINES.AS_TOKEN);
    } catch (e) {
      console.log('error read AsyncStorage' + e);
    }
    if (value != '') {
      axios({
        method: 'GET',
        baseURL: BASE_URL,
        url: '/users/me',
        headers: {
          'shanect-access-token': `${value}`,
        },
      })
        .then(res => {
          dispatch(changeAccountInfo(res.data));
        })
        .catch(err =>
          console.log(
            'MainHeader: ',
            JSON.stringify(err.response.config.headers),
          ),
        );
    }
  };
  const {
    primaryBackground,
    secondaryBackground,
    secondaryBackgroundLight,
    primaryBackgroundLight,
    primaryBackgroundDark,
    secondaryBackgroundDark,
    primaryText,
    primaryLight,
    primaryFaint,
    primary,
    primaryBold,
  } = useTheme().colors;
  const renderItem = React.useCallback(({index}) => {
    return (
      <View style={[styles.box, index % 2 === 0 ? styles.boxB : styles.boxA]} />
    );
  }, []);
  return (
    <SafeAreaView style={{...styles.container}}>
      <Tabs.Container
        renderHeader={() => (
          <>
            <HeaderProfile />
          </>
        )}
        containerStyle={{backgroundColor: primaryBackground}}
        headerContainerStyle={{backgroundColor: primaryBackgroundLight}}
        TabBarComponent={props => (
          <MaterialTabBar
            {...props}
            indicatorStyle={{backgroundColor: primary}}
            labelStyle={{color: primaryText}}
          />
        )}>
        <Tabs.Tab name="Support" label="Hỗ trợ">
          <Tabs.FlatList
            ListHeaderComponent={SupportListHeader}
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Consult" label="Tư vấn">
          <Tabs.FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={identity}
          />
        </Tabs.Tab>
        <Tabs.Tab name="Notification" label="Thông báo">
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
