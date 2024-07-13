import { useEffect, useState } from "react";
import { Keyboard, KeyboardEvent } from "react-native";

export const useKeyboardHeight = () => {
  const [height, setHeight] = useState(0);

  const onKeyboardDidShow = (e: KeyboardEvent) => setHeight(e.endCoordinates.height);
  const onKeyboardDidHide = () => setHeight(0);

  useEffect(() => {
    const showSubscription = Keyboard.addListener("keyboardDidShow", onKeyboardDidShow);
    const hideSubscription = Keyboard.addListener("keyboardDidHide", onKeyboardDidHide);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  return height;
};
