import React, { useState } from "react";
import { FlatList, Button, Text, View } from "react-native";
import { useQuery } from "@apollo/client";
import Loader from "../Loader";
import ListItem from "../ListItem";
import { LIST_QUERY } from "../Queries";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "../GlobalStyles";

function ListView({ navigation }) {
  const [page, setPage] = useState(1);
  const limit = 20;

  const { data, loading, fetchMore } = useQuery(LIST_QUERY, {
    variables: { page: page },
  });

  const nextPage = () => {
    if (page + 1 <= Math.ceil(data.characters.info.count / limit)) {
      fetchMore({
        variables: { page: page },
      });
      setPage(page + 1);
    }
  };

  const prevPage = () => {
    if (page - 1 !== 0) {
      fetchMore({
        variables: { page: page },
      });
      setPage(page - 1);
    }
  };

  //What I assumed would work for infinit scrolling ? :/
  // const nextPage = () => {
  //   fetchMore({
  //     variables: { page: 2 },
  //     updateQuery: (prev, { fetchMoreResult }) => {
  //       console.log("fetchMoreResult", fetchMoreResult);
  //       console.log("prev", prev);
  //       if (!fetchMoreResult) {
  //         return prev;
  //       }
  //       return {
  //         characters: {
  //           ...prev.characters,
  //           results: [
  //             ...prev.characters.results,
  //             ...fetchMoreResult.characters.results,
  //           ],
  //         },
  //       };
  //     },
  //   });
  //   setPage(page + 1);
  // };

  if (loading) {
    return <Loader />;
  }

  console.log("data", data.characters);

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
        keyExtractor={(item) => item.id}
        ListFooterComponent={
          <View>
            <View styles={styles.navigation}>
              <Button
                disabled={page - 1 === 0}
                title="prev page"
                onPress={prevPage}
              />
              <Button
                disabled={
                  page + 1 > Math.ceil(data.characters.info.count / limit)
                }
                title="next page"
                onPress={nextPage}
              />
            </View>
          </View>
        }
      />
    </SafeAreaView>
  );
}
export default ListView;
