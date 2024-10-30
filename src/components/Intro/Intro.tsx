import React, { useEffect, useRef } from "react";
import { View, Image, Animated } from "react-native";
import styles from "./style";

const Intro = () => {
  const translateXValue = useRef(new Animated.Value(-300)).current;
  const opacityValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(translateXValue, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityValue, {
        toValue: 0,
        duration: 1000,
        delay: 2000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          styles.animatedContainer,
          {
            transform: [{ translateX: translateXValue }],
            opacity: opacityValue,
          },
        ]}
      >
        <Image
          style={styles.image}
          source={require("../../../assets/logo.jpeg")}
          resizeMode="cover"
        />
      </Animated.View>
    </View>
  );
};

export default Intro;
