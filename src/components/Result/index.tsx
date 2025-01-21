import React from "react";
import { Text, View } from "react-native";
import styles from "./index.styles";

interface ResultProps {
  resultImcMessage: string;
  resultImc: number | string;
}

const Result: React.FC<ResultProps> = ({ resultImcMessage, resultImc }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.imcMessage}>{resultImcMessage}</Text>
      <Text style={styles.imcResult}>{resultImc}</Text>
    </View>
  );
};

export default Result;
