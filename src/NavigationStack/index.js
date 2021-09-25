import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Loader from "../Loader";
import DetailsView from "../DetailsView";
import ListView from "../ListView";
import { screenOptions } from "../GlobalStyles";

const prefix = Linking.createURL("/");
const Stack = createNativeStackNavigator();
const cache = new InMemoryCache();

//Couldn't figure out the caching policy in graphql (first time using graphql noob)
//   {
//   typePolicies: {
//     Characters: {
//       fields: {
//         results: {
//           keyArgs: false,
//           merge(existing = [], incoming) {
//             console.log("existing", existing);
//             console.log("incoming", incoming);

//             return [...incoming];
//           },
//         },
//       },
//     },
//   },
// }

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

function NavigationStack() {
  const linking = {
    prefixes: [prefix],
    config: {
      screens: {
        list: "list",
        detail: "detail",
      },
    },
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer linking={linking} fallback={<Loader />}>
          <Stack.Navigator
            initialRouteName="list"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="list"
              options={{
                title: "Characters List",
              }}
              component={ListView}
            />
            <Stack.Screen
              name="detail"
              options={{
                title: "Character Details",
              }}
              // options={({
              //   route: {
              //     params: {
              //       chapter: { number, title },
              //     },
              //   },
              // }) => ({
              //   title: number ? `Chapter ${number}: ${title}` : title,
              //   gestureResponseDistance: { horizontal: 500 },
              // })}
              component={DetailsView}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </NavigationContainer>
      </SafeAreaProvider>
    </ApolloProvider>
  );
}
export default NavigationStack;
