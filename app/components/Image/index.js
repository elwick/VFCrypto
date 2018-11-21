import React from 'react';
import PropTypes from 'prop-types';

function Image(props) {
  return (
    <img
      className={props.className}
      src={require(`images/${props.image}`)}
      width={props.width}
    />
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Image;
