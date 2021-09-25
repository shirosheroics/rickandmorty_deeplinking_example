import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles, { L_GREEN } from "../GlobalStyles";

export default function Loader() {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={L_GREEN} />
    </View>
  );
}
