import React from "react";
import { View, Text, Button, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

const lessons = [
  { id: "1", title: "Introduction to JavaScript" },
  { id: "2", title: "Variables and Data Types" },
  { id: "3", title: "Functions and Scope" },
];

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>JavaScript Course</Text>
      <FlatList
        data={lessons}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button title={item.title} onPress={() => navigation.navigate("Lesson", { lesson: item })} />
        )}
      />
    </View>
  );
};

export default Home;
