import React, { useEffect, useRef, useState } from "react";
import { ActivityIndicator, Alert, BackHandler, Linking } from 'react-native'
import WebView from "react-native-webview";
import { Container, Loading } from "./styles";

const Main: React.FC = () => {

  const webViewRef = useRef<WebView>(null)
  const [notCloseApp, setNotCloseApp] = useState<boolean>(true)
  const handleAndroidBackPress = (): boolean => {
    if (webViewRef.current) {
      webViewRef.current.goBack()
      return notCloseApp
    }
    return false
  }

  useEffect((): (() => void) => {
    BackHandler.addEventListener('hardwareBackPress', handleAndroidBackPress);
    return (): void => {
      BackHandler.removeEventListener('hardwareBackPress', handleAndroidBackPress);
    };
  }, [notCloseApp]);
  
  return (
    <Container>
      <Loading />
        <WebView 
          ref={webViewRef}
          source={{ uri: 'http://www.mphomolog.net:8081/cpostal/sistema/index.php' }}
          startInLoadingState
          renderLoading={() => (
            <Loading size = "large"/>
          )}
          allowsBackForwardNavigationGestures
          onNavigationStateChange={(navState) => {
              setNotCloseApp(navState.canGoBack)
          }}
  
        />
    </Container>
  )
}

export default Main