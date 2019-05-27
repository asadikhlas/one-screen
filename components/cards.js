import React from "react";
import { View, Text } from "react-native";
import {
    Card,
    CardItem,
  } from "native-base";

const cards = () => {
  return (
    <View>
      <Card style={{ marginRight: 200, marginLeft: 25, marginTop: 10 }}>
        <CardItem>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>
            3:00PM - 5:00PM
          </Text>
        </CardItem>
        <CardItem style={{ marginTop: -20, backgroundColor: "transparent" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>John Key</Text>
        </CardItem>

        <CardItem style={{ marginTop: -20, backgroundColor: "transparent" }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
              color: "lightgrey"
            }}
          >
            With Judy Brown
          </Text>
        </CardItem>
      </Card>

      <Card style={{ marginRight: 200, marginLeft: 25, marginTop: 5 }}>
        <CardItem>
          <Text style={{ fontSize: 10, fontWeight: "bold" }}>
            3:00PM - 5:00PM
          </Text>
        </CardItem>
        <CardItem style={{ marginTop: -20, backgroundColor: "transparent" }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>John Key</Text>
        </CardItem>

        <CardItem style={{ marginTop: -20, backgroundColor: "transparent" }}>
          <Text
            style={{
              fontSize: 10,
              fontWeight: "500",
              color: "lightgrey"
            }}
          >
            With Judy Brown
          </Text>
        </CardItem>
      </Card>
    </View>
  );
};

export default cards;
