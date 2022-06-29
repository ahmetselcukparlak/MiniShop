import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const SCREEN_WIDTH = width < height ? width : height;

const NumColums = 2;
const ITEM_HEIGHT = 150;
const ITEM_MARGIN = 20;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  itemBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: ITEM_MARGIN / 2,
    marginTop: ITEM_MARGIN,
    width: (SCREEN_WIDTH - (NumColums + 1) * ITEM_MARGIN) / NumColums,
    height: ITEM_HEIGHT + 75,
    borderColor: "#cccccc",
    borderWidth: 0.5,
    borderRadius: 15,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  price: {
    fontSize: 25,
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#888",
  },
});

export default styles;
