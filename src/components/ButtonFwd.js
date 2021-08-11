import React from 'react';
import { Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const ButtonFwd = ({ onAnswerSelected, isDisabled }) => {
  return (
    <Button
       color='teal'
      floated='right'
      size='mini'
      disabled={isDisabled}
      onClick={onAnswerSelected}
      content={'Далее'}
    >
    </Button>
  );
}

ButtonFwd.propTypes = {
  onAnswerSelected: PropTypes.func.isRequired,
  isDisabled: PropTypes.bool.isRequired,
};

export default ButtonFwd;
