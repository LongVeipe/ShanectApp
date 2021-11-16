import React, {useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {Transition, Transitioning} from 'react-native-reanimated';
import {FONTS, SIZES, COLORS} from '../../constants';
import {Svg, Path} from 'react-native-svg';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {useTheme} from '@react-navigation/native';
import styled from 'styled-components/native';


const Background = styled(Transitioning.View)`
  flex: auto;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: ${(props) => (props.focused ? bgColors[props.label] : 'white')};
  border-radius: 30px;
  margin: 10px;
  margin-horizontal: 10px;
`;
const MainTabButton = props => {

  const theme = useTheme();
  const selected = props.accessibilityState.selected;
  const transition = (
    <Transition.Sequence>
      <Transition.Out type="fade" durationMs={0} />
      <Transition.Change interpolation="easeInOut" durationMs={100} />
      <Transition.In type="fade" durationMs={10} />
    </Transition.Sequence>
  );
  const ref = useRef();
  return (
    <TouchableOpacity
      style={{...styles.container, flex: selected? 1: 0}}
      onPress={() => {
        ref.current.animateNextTransition();
        props.onPress();
      }}>
      <Background
        style={{
          ...styles.background,
          backgroundColor: selected ? theme.colors.primary : COLORS.transparent,
        }}
        ref={ref}
        transition={transition}>
        <FontAwesome5
          size={25}
          name={props.iconName}
          color={selected ? theme.colors.primaryFaint : theme.colors.primaryLight}
        />
        {selected && (
          <Text
            style={{
                fontSize: 16,
              color: selected ? theme.colors.primaryFaint : theme.colors.primaryFaint,
              paddingLeft: SIZES.padding,
            }}>
            {props.label}
          </Text>
        )}
      </Background>
    </TouchableOpacity>
  );
};

export default MainTabButton;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  background: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.radius,
    margin: SIZES.padding,
    paddingHorizontal: SIZES.padding,
  },
});
