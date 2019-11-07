import React from 'react';
import PropTypes from 'prop-types';
import { FlatList, View, StyleSheet } from 'react-native';
import { Label, Thumbnail } from 'native-base';
import { Grid, Row, Col } from 'react-native-easy-grid';

const RateItem = ({ item }) => {
  return (
    <View style={styles.rateItem} size={50}>
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
                uri: 'https://www.countryflags.io/us/flat/64.png'
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
  );
};

RateItem.propTypes = {
  item: PropTypes.object
};

const RateList = ({ data }) => {
  return (
    <FlatList
      keyExtractor={item => item.id}
      data={data}
      renderItem={({ item }) => <RateItem item={item} />}
      numColumns={2}
    />
  );
};

RateList.propTypes = {
  data: PropTypes.array
};

const styles = StyleSheet.create({
  centered: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  rateItem: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '50%'
  }
});

export default RateList;
