import React from "react";
import { View, Text, Button } from "react-native";
import { useRoute, useNavigation } from "@react-navigation/native";

const LessonScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { lesson } = route.params;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>{lesson.title}</Text>
      <Text style={{ marginTop: 10 }}>Lesson content will be here...</Text>
      <Button title="Take Quiz" onPress={() => navigation.navigate("Quiz")} />
    </View>
  );
};

export default LessonScreen;
