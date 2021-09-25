import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import styles from "../GlobalStyles";

const ListItem = ({ character, onPress }) => {
  const { image, name } = character;

  let header = `Character: ${name}`;
  return (
    <View style={styles.listItem}>
      <Pressable style={styles.item} onPress={onPress}>
        <Image style={styles.imageThumbnail} source={{ uri: image }} />
        <Text style={styles.header}>{header}</Text>
      </Pressable>
    </View>
  );
};
export default ListItem;
