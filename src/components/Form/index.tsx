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

  const imcCalculator = (heightNum: number, weightNum: number): void => {
    const heightSquared = heightNum ** 2;
    setImc(parseFloat((weightNum / heightSquared).toFixed(2)));
  };

  const validatorCallImcCalculator = (): void => {
    const heightNum = parseFloat(normalizeNumber(height));
    const weightNum = parseFloat(normalizeNumber(weight));

    if (heightNum > 2.5 || heightNum < 0.6) {
      setMessageImc("Altura inválida");
      setImc(null);
      return;
    } else if (weightNum > 600 || weightNum < 2) {
      setMessageImc("Peso inválido");
      setImc(null);
      return;
    }

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
          keyboardType="numeric"
          style={[styles.textInput, isHeightFocused && styles.textInputFocused]}
          onFocus={() => setIsHeightFocused(true)}
          onBlur={() => setIsHeightFocused(false)}
        />

        <Text style={styles.labelText}>Peso</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
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
          <Text style={{color: '#fff'}}>Calcular</Text>
        </TouchableOpacity>
      </View>

      <Result resultImcMessage={messageImc} imc={imc} />
    </View>
  );
};

export default Form;
