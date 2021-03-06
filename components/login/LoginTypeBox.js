import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {SIZES, images, COLORS, FONTS, icons} from '../../constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Animated, {
  Clock,
  clockRunning,
  EasingNode,
  Extrapolate,
  startClock,
  stopClock,
} from 'react-native-reanimated';

const {Value, event, block, cond, eq, set, debug, timing, interpolate} =
  Animated;
function runTiming(clock, value, dest) {
  const state = {
    finished: new Value(0),
    position: new Value(0),
    time: new Value(0),
    frameTime: new Value(0),
  };

  const config = {
    duration: 1000,
    toValue: new Value(0),
    easing: EasingNode.inOut(EasingNode.ease),
  };

  return block([
    cond(clockRunning(clock), 0, [
      set(state.finished, 0),
      set(state.time, 0),
      set(state.position, value),
      set(state.frameTime, 0),
      set(config.toValue, dest),
      startClock(clock),
    ]),
    timing(clock, state, config),
    cond(state.finished, debug('stop clock', stopClock(clock))),
    state.position,
  ]);
}

const LoginTypeBox = () => {
  const buttonOpacity = useSelector(state => state.loginReducer.buttonOpacity);
  const boxY = buttonOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [200, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const onStateChange = event([
    {
      nativeEvent: ({state}) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 1, 0)),
          ),
        ]),
    },
  ]);

  function onOpenLoginForm(type) {
    switch (type) {
      case 'shanect':
        break;
      case 'google':
        break;
      case 'facebook':
        break;
      default:
        break;
    }
  }

  const ButtonChooseLoginType = props => {
    return (
      <TapGestureHandler onHandlerStateChange={onStateChange}>
        <Animated.View>
          <TouchableOpacity
            style={{
              ...styles.buttonChooseLoginType,
              // ...styles.shadow,
            }}
            onPress={() => onOpenLoginForm(props.icon)}>
            <View style={{marginRight: SIZES.padding * 2, opacity: 0.7}}>
              {props.icon === 'shanect' ? (
                <Image source={images.logo_white} style={{width: 20, height: 20,}} />
              ) : (
                <FontAwesome
                  name={props.icon}
                  size={20}
                  color={COLORS.white}
                />
              )}
            </View>
            <Text
              style={{
                ...FONTS.body4,
                fontWeight: 'bold',
                color: COLORS.white,
                opacity: 0.8,
              }}>
              {props.title}
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </TapGestureHandler>
    );
  };
  return (
    <Animated.View
      style={{
        ...styles.loginBox,
        opacity: buttonOpacity,
        transform: [{translateY: boxY}],
      }}>
      <ButtonChooseLoginType
        title="????NG NH???P B???NG T??I KHO???N SHANECT"
        icon="shanect"
      />
      <ButtonChooseLoginType
        title="????NG NH???P V???I GOOGLE"
        icon="google"
      />
      <ButtonChooseLoginType
        title="????NG NH???P V???I FACEBOOK"
        icon="facebook"
      />
    </Animated.View>
  );
};

export default LoginTypeBox;

const styles = StyleSheet.create({
  loginBox: {
    paddingHorizontal: SIZES.padding * 2,
    paddingBottom: SIZES.height * 0.15,
    position: 'absolute',
    left: 0,
    right: 0,
  },
  buttonChooseLoginType: {
    borderRadius: SIZES.radius,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: SIZES.padding,
    paddingVertical: SIZES.padding2,
    marginVertical: SIZES.padding * 0.6,
    backgroundColor: 'rgba(197,88,128, 0.55)'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
  },
});
