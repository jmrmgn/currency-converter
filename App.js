import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading } from 'expo';
import { Container, Title, Header, Body, Content } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

import CurrencyConverterForm from './components/Main/CurrencyConverterForm/index';
import CurrencyExchangeRates from './components/Main/CurrencyExchangeRates/index';

const App = props => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font
    });

    setIsReady(true);
  };

  if (!isReady) return <AppLoading />;

  return (
    <Container style={styles.container}>
      <Header noLeft style={styles.header}>
        <Body>
          <Title>Currency Converter</Title>
        </Body>
      </Header>
      <Content padder>
        <CurrencyConverterForm />
        <CurrencyExchangeRates />
      </Content>
    </Container>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d9d9d9'
  },
  header: {
    paddingTop: getStatusBarHeight(),
    height: 54 + getStatusBarHeight()
  }
});

export default App;
