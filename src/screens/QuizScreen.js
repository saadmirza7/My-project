import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const QuizScreen = () => {
  const [score, setScore] = useState(0);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 22, fontWeight: "bold" }}>Quiz</Text>
      <Text>Question: What is JavaScript?</Text>
      <Button title="A Programming Language" onPress={() => setScore(score + 1)} />
      <Button title="A Database" onPress={() => setScore(score)} />
      <Text>Score: {score}</Text>
    </View>
  );
};

export default QuizScreen;


