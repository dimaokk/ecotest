import { StyleSheet, Text, View } from "react-native";
import Map from "./src/screen/Map";
import Navigate from "./src/navigate/Navigate";
import React from "react";
import BottomSheetQ from "./src/components/BottomSheet";

export default function App() {
  return (
    <>
      <Map />
      <BottomSheetQ />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
