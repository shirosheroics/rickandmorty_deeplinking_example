import React, { useEffect, useState } from "react";
import NavigationStack from "./src/NavigationStack";
import * as Linking from "expo-linking";
export default function App() {
  const [data, setData] = useState(null);
  function handleDeepLink(event) {
    let data = Linking.parse(event.url);
    console.log(data.queryParams.id);
    setData(data);
  }

  useEffect(() => {
    async function getInitialURL() {
      const initUrl = await Linking.getInitialURL();
      if (initUrl) setData(Linking.parse(initUrl));
    }
    Linking.addEventListener("url", handleDeepLink);
    if (!data) {
      getInitialURL();
    }
    return () => {
      Linking.removeEventListener("url");
    };
  }, []);
  return <NavigationStack />;
}
