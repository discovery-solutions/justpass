import styled from "styled-components/native";

const { WebView: RNWebView } = require("react-native-webview");

export const WebView = styled(RNWebView)`
  flex: 1;
  background: transparent;
  z-index: 2;
`;

export const Container = styled.View`
  flex: 1;
  background: #F5F5F5;
`;

export const AbsoluteContainer = styled.View`
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const Text = styled.Text`
  position: absolute;
  font-size: 20px;
  line-height: 24px;
  font-weight: 500;
  color: black;
`;