import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StatusBar, StyleSheet, Text, View, SafeAreaView } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
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
  safeAreaView: { flex: 1, marginTop: StatusBar.currentHeight },
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
