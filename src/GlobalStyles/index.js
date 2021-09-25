import { StyleSheet } from "react-native";

export const PINK = "#ff5dc8";

export const screenOptions = {
  headerStyle: {
    backgroundColor: PINK,
  },
  headerTintColor: "#fff",
};

export default StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  item: {
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
  header: {
    fontWeight: "bold",
  },
  subheader: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageThumbnail: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: null,
  },
  navigation: {
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
