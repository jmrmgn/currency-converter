import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Card, CardItem, Input, Label } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import CustomPicker from '../../UI/Picker';
import { getRates, convertCurrency } from '../../../api/Rates';

const CurrencyConverterForm = props => {
  const [options, setOptions] = useState([]);
  const [currencyFrom, setCurrencyFrom] = useState();
  const [currencyTo, setCurrencyTo] = useState();
  const [currencyFromValue, setCurrencyFromValue] = useState();
  const [currencyToValue, setCurrencyToValue] = useState(0.0);

  useEffect(() => {
    fetchRates();
  }, []);

  const fetchRates = async () => {
    const { rates } = await getRates();
    const rateList = Object.keys(rates).map(rate => ({
      label: rate,
      value: rate.toLowerCase()
    }));

    setOptions(rateList);
  };

  const handleChangeCurrencyFromValue = async value => {
    setCurrencyFromValue(value);
    const data = await convertCurrency(currencyFrom, currencyTo, value);
    setCurrencyToValue(data);
  };

  const handleChangeCurrencyFrom = async value => {
    setCurrencyFrom(value);
    const data = await convertCurrency(
      currencyFrom,
      currencyTo,
      currencyFromValue
    );
    setCurrencyToValue(data);
  };

  const handleChangeCurrencyTo = async value => {
    setCurrencyTo(value);
    const data = await convertCurrency(
      currencyFrom,
      currencyTo,
      currencyFromValue
    );
    setCurrencyToValue(data);
  };

  return (
    <Card>
      <CardItem>
        <Grid>
          <Row>
            <Col size={40}>
              <CustomPicker
                options={options}
                selectedValue={currencyFrom}
                onValueChange={handleChangeCurrencyFrom}
              />
            </Col>
            <Col size={60}>
              <View style={styles.inputContainer}>
                <Input
                  placeholder="0.00"
                  value={currencyFromValue}
                  onChangeText={handleChangeCurrencyFromValue}
                />
              </View>
            </Col>
          </Row>
          <Row>
            <Col size={40}>
              <CustomPicker
                options={options}
                selectedValue={currencyTo}
                onValueChange={handleChangeCurrencyTo}
              />
            </Col>
            <Col size={60}>
              <View style={styles.inputContainer}>
                <Label>{currencyToValue}</Label>
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
