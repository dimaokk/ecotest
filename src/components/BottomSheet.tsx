import React, { useCallback, useMemo, useRef, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

const BottomSheetQ = () => {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isOpen, setIsOpen] = useState(true);

  // variables
  const snapPoints = ["15%"];

  // callbacks
  //   const handleSheetChanges = useCallback((index: number) => {
  //     console.log("handleSheetChanges", index);
  //   }, []);

  // renders
  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      // onChange={handleSheetChanges}
    >
      <BottomSheetView>
        <View style={styles.butttonContainer}> 
          <Text style={styles.buttton}>Добавить проишествие</Text>
          <Text style={styles.buttton}>Зарегистрироваться</Text>
        </View>
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  butttonContainer: {
  flexDirection: 'row',
  alignItems: "center",
  justifyContent: "space-around",
  },
  buttton: {
  paddingHorizontal: 25,
  paddingVertical: 15,
  backgroundColor: '#FFE3DE'
  },
});

export default BottomSheetQ;
