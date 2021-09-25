import React, { useState } from "react";
import { FlatList } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import ListItem from "../ListItem";
import { LIST_QUERY } from "../Queries";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../GlobalStyles";

function ListView({ navigation }) {
  const [page, setPage] = useState(1);
  const { data, loading } = useQuery(LIST_QUERY, {
    variables: { page: page },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data.characters.results}
        renderItem={({ item }) => (
          <ListItem
            character={item}
            onPress={() => navigation.navigate("Detail", { character: item })}
          />
        )}
        numColumns={2}
        keyExtractor={(character) => character.id.toString()}
      />
    </SafeAreaView>
  );
}
export default ListView;
