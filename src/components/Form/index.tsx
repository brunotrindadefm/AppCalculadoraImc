import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Result from "../Result";
import styles from "./index.styles";

const Form = () => {
  const [height, setHeight] = useState<string>("");
  const [weight, setWeight] = useState<string>("");
  const [messageImc, setMessageImc] = useState<string>(
    "Preencha o peso e altura"
  );
  const [imc, setImc] = useState<number | null>(null);
  const [isHeightFocused, setIsHeightFocused] = useState<boolean>(false);
  const [isWeightFocused, setIsWeightFocused] = useState<boolean>(false);

  const imcCalculator = (heightNum: number, weightNum: number) => {
    const heightSquared = heightNum * heightNum;
    const calculateImc = weightNum / heightSquared;
    return setImc(parseFloat(calculateImc.toFixed(2)));
  };

  const validatorCallImcCalculator = () => {
    const heightNum = parseFloat(normalizeNumber(height));
    const weightNum = parseFloat(normalizeNumber(weight));

    if (
      !isNaN(heightNum) &&
      !isNaN(weightNum) &&
      heightNum > 0 &&
      weightNum > 0
    ) {
      imcCalculator(heightNum, weightNum);
      setMessageImc("Seu imc é:");
      setHeight("");
      setWeight("");
      return;
    }
    setImc(null);
    setMessageImc("Preencha os campos");
  };

  const normalizeNumber = (value: string): string => value.replace(",", ".");

  return (
    <View>
      <View style={styles.formContainer}>
        <Text style={styles.labelText}>Altura</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder="Ex: 1.75"
          keyboardType="numeric"
          style={[styles.textInput, isHeightFocused && styles.textInputFocused]}
          onFocus={() => setIsHeightFocused(true)}
          onBlur={() => setIsHeightFocused(false)}
        />

        <Text style={styles.labelText}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex: 78.2"
          keyboardType="numeric"
          style={[styles.textInput, isWeightFocused && styles.textInputFocused]}
          onFocus={() => setIsWeightFocused(true)}
          onBlur={() => setIsWeightFocused(false)}
        />

        <TouchableOpacity
          onPress={() => {
            Keyboard.dismiss();
            validatorCallImcCalculator();
          }}
          style={styles.calculateButton}
        >
          <Text> Calcular</Text>
        </TouchableOpacity>
      </View>

      <Result resultImcMessage={messageImc} resultImc={imc ?? ""} />
    </View>
  );
};

export default Form;
