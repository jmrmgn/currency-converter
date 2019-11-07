import React from 'react';
import PropTypes from 'prop-types';

import { Picker } from 'native-base';

const CustomPicker = props => {
  const { options } = props;
  return (
    <Picker {...props}>
      {options.map((option, index) => (
        <Picker.Item key={index} label={option.label} value={option.value} />
      ))}
    </Picker>
  );
};

CustomPicker.propTypes = {
  options: PropTypes.array
};

export default CustomPicker;
