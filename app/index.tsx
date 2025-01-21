import React from "react";
import { View, StyleSheet, Keyboard, TouchableOpacity } from "react-native";
import Main from "@/src/components/Main";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Index() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        onPress={Keyboard.dismiss}
      >
        <View style={styles.container}>
          <Main />
        </View>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
