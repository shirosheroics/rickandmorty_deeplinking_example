import { StyleSheet } from "react-native";

export const L_GREEN = "#6CBC1C";
export const L_YELLOW = "#FCD301";
export const L_BLUE = "#8ED4F5";

export const screenOptions = {
  headerStyle: {
    backgroundColor: L_GREEN,
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
  },
  text: {
    color: "#fff",
  },
  header: {
    fontWeight: "bold",
    color: "#fff",
  },
  subheader: {
    paddingTop: 10,
  },
  container: {
    flex: 1,
    backgroundColor: "#000",
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
  listItem: {
    flexBasis: "45%",
    flexDirection: "column",
    margin: 1,
    backgroundColor: L_GREEN,
  },
  btnNext: {
    backgroundColor: "#FCD301",
    borderWidth: 1,
    borderColor: "#FCD301",
  },
  btnPrev: {
    backgroundColor: "#8ED4F5",
  },
});
