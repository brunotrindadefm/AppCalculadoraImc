import React from "react";
import { Text, View, Image } from "react-native";
import styles from "./index.syles";

const logoImage = require("../../../assets/images/logo.png");

const SplashScreenComponent = () => {
  return (
    <View style={styles.splashContainer}>
      <Image style={styles.logoImage} source={logoImage} />
      <Text style={styles.logoText}>Calculadora de IMC</Text>
    </View>
  );
};

export default SplashScreenComponent;
