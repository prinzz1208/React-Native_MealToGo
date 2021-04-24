import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import {
  StatusBar,
  Platform,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
} from "react-native";

const isAndroid = Platform.OS === "android";
export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1, marginTop: StatusBar.currentHeight }}>
        <View style={styles.search}>
          <Text>Search</Text>
        </View>
        <View style={styles.list}>
          <Text> list </Text>
        </View>
        <ExpoStatusBar style="auto" />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  search: {
    backgroundColor: "green",
    padding: 16,
  },
  list: {
    flex: 1,
    padding: 20,
    backgroundColor: "blue",
  },
});
