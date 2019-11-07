import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card, CardItem, Label } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

import RateList from './RateList';

const CurrencyExchangeRates = props => {
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
    { id: 12, code: 'PHP', rate: 53 },
    { id: 12, code: 'PHP', rate: 53 }
  ];

  return (
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
          {data.length === 0 ? (
            <View style={styles.centered}>
              <Label style={{ fontSize: 13, color: 'gray' }}>
                No data yet.
              </Label>
            </View>
          ) : (
            <>
              <Row style={{ marginVertical: 10 }}>
                <RateList data={data} />
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
