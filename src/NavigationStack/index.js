import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import * as Linking from "expo-linking";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";

import DetailsView from "../DetailsView";
import ListView from "../ListView";
import { screenOptions } from "../GlobalStyles";

const prefix = Linking.createURL("/");
const Stack = createNativeStackNavigator();
const cache = new InMemoryCache();

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache,
});

function NavigationStack() {
  const linking = {
    prefixes: [prefix],
  };

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <NavigationContainer
          linking={linking}
          fallback={<Text>Loading...</Text>}
        >
          <Stack.Navigator
            initialRouteName="List"
            screenOptions={screenOptions}
          >
            <Stack.Screen
              name="List"
              options={{
                title: "Characters List",
              }}
              component={ListView}
            />
            <Stack.Screen
              name="Detail"
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
