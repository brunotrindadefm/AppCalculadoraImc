import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import styles from "./index.styles";

interface ResultProps {
  resultImcMessage: string;
  imc: number | null;
}

const Result: React.FC<ResultProps> = ({ resultImcMessage, imc }) => {
  const [imcResultColor, setImcResultColor] = useState<string>();
  const [imcResult, setImcResult] = useState<string>("");

  const imcDetails = (): void => {
    const imcNum = Number(imc);

    if (!imcNum) {
      setImcResult("");
      setImcResultColor("");
      return;
    }

    if (imcNum < 18.5) {
      setImcResultColor("blue");
      setImcResult("Abaixo do peso");
    } else if (imcNum >= 18.5 && imcNum <= 24.9) {
      setImcResultColor("green");
      setImcResult("Peso ideal");
    } else if (imcNum >= 25 && imcNum <= 29.9) {
      setImcResultColor("orange");
      setImcResult("Acima do peso");
    } else {
      setImcResultColor("red");
      setImcResult("Obesidade");
    }
  };

  useEffect(() => {
    imcDetails();
  }, [imc]);

  return (
    <View style={styles.container}>
      <Text style={styles.imcMessage}>{resultImcMessage}</Text>
      <Text style={styles.imcResult && { color: imcResultColor }}>
        {imcResult}
      </Text>
      <Text style={styles.imcResult && { color: imcResultColor }}>{imc}</Text>
    </View>
  );
};

export default Result;
