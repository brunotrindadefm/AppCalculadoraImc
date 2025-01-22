import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  formContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "column",
    padding: 22,
    gap: 8,
    backgroundColor: "#BBDEFB",
    borderRadius: 12,
    width: 250,
  },
  labelText: {
    marginBottom: 2,
    fontSize: 18,
    fontWeight: 500,
    color: "#37474F",
  },
  textInput: {
    backgroundColor: "#f2f3f4",
    borderRadius: 8,
    padding: 8,
    marginBottom: 12,
    width: "100%",
    borderWidth: 2,
    borderColor: "#CFD8DC",
  },
  textInputFocused: {
    borderWidth: 2,
    borderColor: "#42A5F5",
    backgroundColor: "#eff8ff",
  },
  calculateButton: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#42A5F5",
    borderRadius: 6,
    padding: 8,
    width: "60%",
    marginTop: 5,
    alignSelf: "center",
  },
});

export default styles;
