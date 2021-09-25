import React from "react";
import { Text, View, Image } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../GlobalStyles";

import { DETAIL_QUERY } from "../Queries";

function DetailsView({ route }) {
  const { data, loading } = useQuery(DETAIL_QUERY, {
    variables: { id: route.params.character.id },
  });

  if (loading) {
    return <Loader />;
  }

  const {
    character: { image, name },
  } = data;

  let header = `Character: ${name}`;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
        <Image style={styles.imageThumbnail} source={{ uri: image }} />
        <Text style={styles.header}>{header}</Text>
      </View>
    </SafeAreaView>
  );
}
export default DetailsView;
