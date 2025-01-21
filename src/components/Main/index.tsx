import React from "react";
import { Keyboard, View } from "react-native";
import Form from "../Form";
import Title from "../Title";
import styles from "../Main/index.styles";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Title />
      <Form />
    </View>
  );
};

export default Main;
