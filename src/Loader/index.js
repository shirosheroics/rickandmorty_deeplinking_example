import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles, { PINK } from "../GlobalStyles";

export default function Loader() {
  return (
    <View style={styles.centered}>
      <ActivityIndicator size="large" color={PINK} />
    </View>
  );
}
