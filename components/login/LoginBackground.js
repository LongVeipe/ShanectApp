import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SIZES, images, COLORS, FONTS, icons} from '../../constants';
import LinearGradient from 'react-native-linear-gradient';
import {useSelector, useDispatch} from 'react-redux';
import Animated, {
  interpolateNode,
  Extrapolate,
  concat,
  event,
  block,
  cond,
  eq,
  set,
  EasingNode,
  Value,
  Clock,
  clockRunning,
  startClock,
  stopClock,
  debug,
  timing,
} from 'react-native-reanimated';
import {TapGestureHandler, State} from 'react-native-gesture-handler';
import Svg, {Circle, ClipPath, Image} from 'react-native-svg';

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
const IconBackground = () => {
  const dispatch = useDispatch();
  const buttonOpacity = useSelector(state => state.loginReducer.buttonOpacity);
  const onCloseLoginForm = event([
    {
      nativeEvent: ({state}) =>
        block([
          cond(
            eq(state, State.END),
            set(buttonOpacity, runTiming(new Clock(), 0, 1)),
          ),
        ]),
    },
  ]);
  const bgrY = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [-SIZES.height * 0.5 -50, 0],
    extrapolate: Extrapolate.CLAMP,
  });
  const rotateCross = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [180, 360],
    extrapolate: Extrapolate.CLAMP,
  });
  const buttonCloseOpacity = interpolateNode(buttonOpacity, {
    inputRange: [0, 1],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <Animated.View
      style={{...styles.container, transform: [{translateY: bgrY}]}}>
      <View style={styles.linearGradient}>
        <Svg height={SIZES.height + 50} width={SIZES.width}>
          <ClipPath id='clip'>
            <Circle r={SIZES.height + 50} cx={SIZES.width/2}/>
          </ClipPath>
          <Image
            // style={styles.background}
            href={images.loginBackground}
            width={SIZES.width}
            height={SIZES.height + 50}
            preserveAspectRatio='xMidYMid slice'
            clipPath="url(#clip)"
          />
        </Svg>
      </View>
      <TapGestureHandler onHandlerStateChange={onCloseLoginForm}>
        <Animated.View
          style={{
            ...styles.closeButton,
            ...styles.shadow,
            opacity: buttonCloseOpacity,
          }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Animated.Text
              style={{
                ...FONTS.body3,
                color: COLORS.black,
                transform: [{rotate: concat(rotateCross, 'deg')}],
              }}>
              X
            </Animated.Text>
          </TouchableOpacity>
        </Animated.View>
      </TapGestureHandler>
    </Animated.View>
  );
};

export default IconBackground;

const styles = StyleSheet.create({
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
  container: {
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
  },
  linearGradient: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    // paddingTop: SIZES.height * 0.15,
  },
  background: {
    flex: 1,
    resizeMode: 'contain',
  },
  closeButton: {
    height: 40,
    width: 40,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    position: 'absolute',
    left: SIZES.width / 2 - 20,
    bottom: -70,
  },
});
