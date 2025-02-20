// src/screens/QuizListScreen.js
import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

const quizData = [
  { id: '1', title: 'JavaScript Basics', questions: 10, difficulty: 'Easy' },
  { id: '2', title: 'Advanced JavaScript', questions: 15, difficulty: 'Hard' },
  { id: '3', title: 'ES6 Features', questions: 12, difficulty: 'Medium' },
  { id: '4', title: 'React Concepts', questions: 8, difficulty: 'Medium' },
];

function QuizListScreen({ navigation }) {
  const renderQuizItem = ({ item }) => (
    <TouchableOpacity
      style={styles.quizCard}
      onPress={() => navigation.navigate('QuizScreen', { quizId: item.id })}
    >
      <Text style={styles.quizTitle}>{item.title}</Text>
      <View style={styles.quizInfo}>
        <Text>Questions: {item.questions}</Text>
        <Text>Difficulty: {item.difficulty}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Available Quizzes</Text>
      <FlatList
        data={quizData}
        renderItem={renderQuizItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  listContainer: {
    padding: 16,
  },
  quizCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  quizTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  quizInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default QuizListScreen;
