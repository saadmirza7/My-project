import React from "react";
import { View, Text } from "react-native";

const Profile = () => {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Profile</Text>
      <Text>Username: John Doe</Text>
      <Text>Email: john@example.com</Text>
    </View>
  );
};

export default Profile;
