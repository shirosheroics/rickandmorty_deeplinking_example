import React from "react";
import { Text, View, Image, FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import { SafeAreaView } from "react-native-safe-area-context";
import styles, { L_GREEN } from "../GlobalStyles";

import { DETAIL_QUERY } from "../Queries";

function DetailsView({ route }) {
  const { data, loading } = useQuery(DETAIL_QUERY, {
    variables: { id: route.params.id },
  });

  if (loading) {
    return <Loader />;
  }

  const {
    character: {
      image,
      name,
      status,
      species,
      type,
      gender,
      origin,
      location,
      episode,
    },
  } = data;

  let header = `Character: ${name}`;

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          // flex: 1,
          flexDirection: "column",
          padding: 8,
          margin: 5,
          backgroundColor: L_GREEN,
        }}
      >
        <Image style={styles.imageThumbnail} source={{ uri: image }} />
        <Text style={styles.header}>{header}</Text>
      </View>
      <View style={{ flex: 1, flexDirection: "column", margin: 1 }}>
        <Text style={styles.header}>status: {status} </Text>
        <Text style={styles.header}>species: {species} </Text>
        <Text style={styles.header}>type: {type} </Text>
        <Text style={styles.header}>gender: {gender} </Text>
        <Text style={styles.header}>origin: {origin.name} </Text>
        <Text style={styles.header}>location: {location.name} </Text>
        <View
          style={{
            flex: 1,
            backgroundColor: "#fff",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 25,
          }}
        >
          <FlatList
            data={episode}
            renderItem={({ item }) => {
              console.log(item);
              return (
                <View style={styles.row}>
                  <Text style={styles.rowText}>
                    Episode Title: {item.name} {"\n"}
                    Episode No. {item.episode} {"\n"}
                    Air Date: {item.air_date}
                  </Text>
                </View>
              );
            }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}
export default DetailsView;
