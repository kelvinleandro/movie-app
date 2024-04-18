import React, { useEffect, useRef } from "react";
import { Animated, Easing, ImageProps, ImageStyle, StyleProp } from "react-native";

interface BouncingImageProps extends Animated.AnimatedProps<ImageProps> {
  style?: StyleProp<ImageStyle>;
}

const BouncingImage: React.FC<BouncingImageProps> = ({style, ...rest}) => {
  const bounceAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(bounceAnimation, {
          toValue: 1,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(bounceAnimation, {
          toValue: 0,
          duration: 800,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  const translateY = bounceAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -10], // Adjust the range for bigger or smaller bounce
  });

  return (
    <Animated.Image
      style={[{ transform: [{ translateY }] }, style]}
      {...rest}
    />
  );
};

export default BouncingImage;
