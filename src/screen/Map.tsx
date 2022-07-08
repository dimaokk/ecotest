import { Dimensions, StyleSheet, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-maps";
import { FC } from "react";

const Map: FC = () => {
  return (
    <MapView
      style={styles.map}
      initialRegion={{
        latitude: 55.7522,
        longitude: 37.6156,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    
    >
      <Marker coordinate={{ latitude: 55.7522, longitude: 37.6156 }}></Marker>
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
