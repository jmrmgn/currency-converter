import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { AppLoading } from 'expo';
import {
  Container,
  Title,
  Header,
  Body,
  Content,
  Card,
  CardItem,
  // Text,
  Picker,
  Icon,
  Input,
  // Button,
  Label,
  Thumbnail
} from 'native-base';
import { Grid, Col, Row } from 'react-native-easy-grid';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { getStatusBarHeight } from 'react-native-status-bar-height';

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

  const data = [
    { id: 1, code: 'PHP', rate: 100.2 },
    { id: 2, code: 'PHP', rate: 53 },
    { id: 3, code: 'PHP', rate: 53 },
    { id: 4, code: 'PHP', rate: 53 },
    { id: 5, code: 'PHP', rate: 53 },
    { id: 6, code: 'PHP', rate: 53 },
    { id: 7, code: 'PHP', rate: 53 },
    { id: 8, code: 'PHP', rate: 53 },
    { id: 9, code: 'PHP', rate: 53 },
    { id: 10, code: 'PHP', rate: 53 },
    { id: 11, code: 'PHP', rate: 53 },
    { id: 12, code: 'PHP', rate: 53 }
  ];
  return (
    <Container style={styles.container}>
      <Header noLeft style={styles.header}>
        <Body>
          <Title>Currency Converter</Title>
        </Body>
      </Header>
      <Content padder>
        <Card>
          <CardItem>
            <Grid>
              <Row>
                <Col size={40}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue="key0"
                    onValueChange={() => {}}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </Col>
                <Col size={60}>
                  <View style={styles.inputContainer}>
                    <Input placeholder="0.00" />
                  </View>
                </Col>
              </Row>
              <Row>
                <Col size={40}>
                  <Picker
                    mode="dropdown"
                    iosHeader="Select your SIM"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{ width: undefined }}
                    selectedValue="key3"
                    onValueChange={() => {}}
                  >
                    <Picker.Item label="Wallet" value="key0" />
                    <Picker.Item label="ATM Card" value="key1" />
                    <Picker.Item label="Debit Card" value="key2" />
                    <Picker.Item label="Credit Card" value="key3" />
                    <Picker.Item label="Net Banking" value="key4" />
                  </Picker>
                </Col>
                <Col size={60}>
                  <View style={styles.inputContainer}>
                    <Label>0.00</Label>
                  </View>
                </Col>
              </Row>
              <Row style={{ marginVertical: 10 }}>
                <Col style={{ padding: 10 }}>
                  {/* <Button primary>
                    <Icon name="sync" />
                    <Text>Reverse</Text>
                  </Button> */}
                  <Button title="Reverse" color="#428bca" />
                </Col>
                <Col style={{ padding: 10 }}>
                  {/* <Button iconLeft danger>
                    <Icon name="trash" />
                    <Text>Clear</Text>
                  </Button> */}
                  <Button title="Clear" color="#d9534f" />
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Grid>
              <Row>
                <Col size={70}>
                  <Label>Currency Exchange Rates</Label>
                </Col>
              </Row>
              <Row>
                <Label style={{ fontSize: 12 }}>As of August 2012</Label>
              </Row>
              <Row style={{ marginVertical: 10 }}>
                <FlatList
                  keyExtractor={item => item.id}
                  data={data}
                  renderItem={({ item }) => (
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: '50%'
                      }}
                      size={50}
                    >
                      <Grid>
                        <Row
                          style={{
                            justifyContent: 'center',
                            alignItems: 'center'
                          }}
                        >
                          <Col size={30}>
                            <Thumbnail
                              source={{
                                uri:
                                  'https://www.countryflags.io/us/flat/64.png'
                              }}
                              square
                              small
                            />
                          </Col>
                          <Col size={30}>
                            <Label>{item.code}</Label>
                          </Col>
                          <Col size={40}>
                            <Label>{item.rate}</Label>
                          </Col>
                        </Row>
                      </Grid>
                    </View>
                  )}
                  numColumns={2}
                />
              </Row>
              <Row>
                <Col>
                  <Label
                    style={{
                      textAlign: 'center',
                      fontSize: 13,
                      color: '#808080'
                    }}
                  >
                    Double tap to refresh
                  </Label>
                </Col>
              </Row>
            </Grid>
          </CardItem>
        </Card>
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
  },
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default App;
