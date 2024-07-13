import { gestureHandlerRootHOC } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useKeyboardHeight } from "./hooks";
import { AbsoluteContainer, Container, Text, WebView } from "./styles";

const URL = "https://justpass.com.br/ecommerce/home/";

export const HomeScreen = gestureHandlerRootHOC(() => {
  const insets = useSafeAreaInsets();
  const paddingBottom = useKeyboardHeight();

  return (
    <Container style={{ paddingBottom, paddingTop: insets.top }}>
      <WebView source={{ uri: URL }}/>
      <AbsoluteContainer>
        <Text>Carregando...</Text>
      </AbsoluteContainer>
    </Container>
  );
});
