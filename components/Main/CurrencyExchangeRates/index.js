import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Card, CardItem, Label } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import RateList from './RateList';
import { getCountries } from '../../../api/Countries';

const CurrencyExchangeRates = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [rateList, setRateList] = useState([]);
  const [date, setDate] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    const { date, countries: data } = await getCountries();
    setRateList(data);
    setDate(date);
    setIsLoading(false);
  };

  return (
    <Card>
      <CardItem>
        <Grid>
          <Row>
            <Col size={70}>
              <Label>Currency Exchange Rates</Label>
            </Col>
          </Row>
          {isLoading ? (
            <View style={styles.centered}>
              <ActivityIndicator size="large" style={{ padding: 20 }} />
            </View>
          ) : rateList.length === 0 ? (
            <View style={styles.centered}>
              <Label style={{ fontSize: 13, color: 'gray' }}>
                No data yet.
              </Label>
            </View>
          ) : (
            <>
              <Row>
                <Label style={{ fontSize: 12 }}>As of {date}</Label>
              </Row>
              <Row style={{ marginVertical: 10 }}>
                <RateList data={rateList} />
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
            </>
          )}
          {}
        </Grid>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CurrencyExchangeRates;
