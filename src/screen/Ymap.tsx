import { View } from "react-native";
import React from "react";
import YaMap from "react-native-yamap";

// YaMap.init("c423ab0a-2a6e-4aa0-9ee1-599dc6011566");

// const route = {
//   start: { lat: 0, lon: 0 },
//   end: { lat: 10, lon: 10 },
// };

const Ymap = () => {
  return (
    <View>
      <YaMap
        userLocationIcon={{
          uri: "https://www.clipartmax.com/png/middle/180-1801760_pin-png.png",
        }}
        style={{ flex: 1 }}
      />
    </View>
  );
};

export default Ymap;
