import React from "react";
import { View } from "react-native";
import Form from "../Form";
import Title from "../Title";
import styles from "../Main/index.styles";

const Main = () => {
  return (
    <View style={styles.mainContainer}>
      <Title />
      <Form />
    </View>
  );
};

export default Main;
