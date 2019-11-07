import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Card, CardItem, Input, Label } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import CustomPicker from '../../UI/Picker';

const CurrencyConverterForm = props => {
  return (
    <Card>
      <CardItem>
        <Grid>
          <Row>
            <Col size={40}>
              <CustomPicker
                options={[
                  { label: 'PHP', value: 'php' },
                  { label: 'USD', value: 'usd' },
                  { label: 'YEN', value: 'yen' }
                ]}
              />
            </Col>
            <Col size={60}>
              <View style={styles.inputContainer}>
                <Input placeholder="0.00" />
              </View>
            </Col>
          </Row>
          <Row>
            <Col size={40}>
              <CustomPicker
                options={[
                  { label: 'PHP', value: 'php' },
                  { label: 'USD', value: 'usd' },
                  { label: 'YEN', value: 'yen' }
                ]}
              />
            </Col>
            <Col size={60}>
              <View style={styles.inputContainer}>
                <Label>0.00</Label>
              </View>
            </Col>
          </Row>
          <Row style={{ marginVertical: 10 }}>
            <Col style={{ padding: 10 }}>
              <Button title="Reverse" color="#428bca" />
            </Col>
            <Col style={{ padding: 10 }}>
              <Button title="Clear" color="#d9534f" />
            </Col>
          </Row>
        </Grid>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CurrencyConverterForm;
